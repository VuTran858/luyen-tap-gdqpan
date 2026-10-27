/**
 * HỆ THỐNG TRẮC NGHIỆM GDQP-AN HỌC PHẦN 1
 * Giao diện cuộn liên tục (Continuous Scroll) - Đáp ứng yêu cầu cuộn xuống làm tiếp
 */

// ==========================================
// BỘ ĐẾM SỐ HỌC VIÊN THAM GIA (TỰ ĐỘNG CLOUD API)
// ==========================================
const USER_COUNTER_KEY = "gdqpan_vutran858_users";
const COUNTER_API_BASE = "https://countapi.mileshilliard.com/api/v1";

// ==========================================
// ĐỒNG BỘ GOOGLE SHEETS (QUẢN LÝ DANH SÁCH & ĐIỂM THI)
// ==========================================
// Link Web App Google Apps Script kết nối Google Sheets:
const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbyxj3ZYndHIfvJW7zmAzBUB_vX5b8I-BrLIHrUirXfPhvvJVawfT9A3HH3SezrlohmL/exec"; 

async function sendToGoogleSheet(payload) {
  if (!GOOGLE_SHEET_API_URL || GOOGLE_SHEET_API_URL.trim() === "") {
    return;
  }
  try {
    const now = new Date();
    const timeStr = now.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    const dataToSend = {
      timestamp: timeStr,
      ...payload
    };

    await fetch(GOOGLE_SHEET_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(dataToSend)
    });
  } catch (err) {
    console.warn("Không thể gửi dữ liệu lên Google Sheets:", err);
  }
}

// ==========================================
// STATE MANAGEMENT
// ==========================================
const AppState = {
  currentView: 'home', // 'home' | 'quiz' | 'result' | 'bank'
  mode: 'practice',    // 'practice' | 'exam' | 'incorrect' | 'marathon'
  
  // Data for active session
  questions: [],
  userAnswers: {},     // global_id -> 'A' | 'B' | 'C'
  flaggedIds: new Set(),
  
  // Timer for exam mode
  timerSeconds: 0,
  timerInterval: null,
  totalExamSeconds: 0,
  
  // Practice settings
  instantFeedback: true,
  
  // Exam metadata
  startTime: null,
  endTime: null,
  
  // Persistent Storage
  incorrectHistory: new Set(), // Set of global_ids
  darkMode: false,
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadPersistentData();
  initTheme();
  renderHomeStats();
  renderLessonsList();
  setupEventListeners();
  initUserProfile();
  fetchTotalUserCount();
});

function loadPersistentData() {
  try {
    const savedIncorrect = localStorage.getItem('gdqpan_incorrect_ids');
    if (savedIncorrect) {
      AppState.incorrectHistory = new Set(JSON.parse(savedIncorrect));
    }
    const savedTheme = localStorage.getItem('gdqpan_theme');
    if (savedTheme === 'dark') {
      AppState.darkMode = true;
    }
  } catch (e) {
    console.error("Failed to load local storage:", e);
  }
}

function saveIncorrectHistory() {
  try {
    localStorage.setItem('gdqpan_incorrect_ids', JSON.stringify(Array.from(AppState.incorrectHistory)));
  } catch (e) {
    console.error("Failed to save incorrect ids:", e);
  }
}

// ==========================================
// USER PROFILE & NAME MODAL
// ==========================================
const USERNAME_STORAGE_KEY = 'gdqpan_soldier_name';
const USERCOUNT_STORAGE_KEY = 'gdqpan_soldier_counted';

function initUserProfile() {
  // Xóa các key thông tin cũ để reset hoàn toàn, đảm bảo người dùng có thể nhập tên mới ngay lập tức
  localStorage.removeItem('gdqpan_username');
  localStorage.removeItem('gdqpan_username_v2');
  localStorage.removeItem('gdqpan_counted_v2');
  localStorage.removeItem('gdqpan_user_registered');

  const savedName = localStorage.getItem(USERNAME_STORAGE_KEY);
  const headerNameEl = document.getElementById('header-user-name');
  
  if (savedName && savedName.trim()) {
    if (headerNameEl) headerNameEl.innerText = savedName.trim();
  } else {
    if (headerNameEl) headerNameEl.innerText = "Tên của bạn";
    // Tự động mở modal yêu cầu nhập tên khi vào lần đầu hoặc khi vừa reset
    setTimeout(() => {
      openUserNameModal(true);
    }, 400);
  }
}

function openUserNameModal(isFirstTime = false) {
  const modal = document.getElementById('user-name-modal');
  const closeBtn = document.getElementById('btn-close-name-modal');
  const input = document.getElementById('input-user-name');
  const errorMsg = document.getElementById('name-error-msg');
  
  if (errorMsg) errorMsg.style.display = 'none';
  
  const savedName = localStorage.getItem(USERNAME_STORAGE_KEY) || '';
  if (input) input.value = savedName;
  
  // Lần đầu vào hoặc chưa có tên thì ẩn nút tắt, bắt buộc phải nhập tên
  if (closeBtn) {
    closeBtn.style.display = (isFirstTime || !savedName) ? 'none' : 'inline-flex';
  }
  
  if (modal) modal.classList.add('active');
  if (input) {
    setTimeout(() => input.focus(), 250);
  }
}

function closeUserNameModal() {
  const modal = document.getElementById('user-name-modal');
  if (modal) modal.classList.remove('active');
}

function submitUserNameForm() {
  const input = document.getElementById('input-user-name');
  const errorMsg = document.getElementById('name-error-msg');
  const name = input ? input.value.trim() : '';
  
  if (!name || name.length < 2) {
    if (errorMsg) errorMsg.style.display = 'block';
    return;
  }
  
  const isFirstTime = !localStorage.getItem(USERCOUNT_STORAGE_KEY);
  
  localStorage.setItem(USERNAME_STORAGE_KEY, name);
  const headerNameEl = document.getElementById('header-user-name');
  if (headerNameEl) headerNameEl.innerText = name;
  
  closeUserNameModal();

  // Tự động đồng bộ tên học viên lên Google Sheets
  sendToGoogleSheet({
    type: 'register',
    name: name,
    device: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Điện thoại' : 'Máy tính',
    screen: `${window.innerWidth}x${window.innerHeight}`
  });

  // Nếu là lần đầu tiên người này nhập tên trên máy này -> tính là 1 học viên mới
  if (isFirstTime) {
    localStorage.setItem(USERCOUNT_STORAGE_KEY, 'true');
    registerNewUserCount();
  }
}

// Lấy tổng số học viên hiện tại (không làm tăng số khi F5 hay xem trang)
async function fetchTotalUserCount() {
  const statBox = document.getElementById('stat-total-users');

  try {
    const res = await fetch(`${COUNTER_API_BASE}/get/${USER_COUNTER_KEY}`);
    const data = await res.json();
    if (data && typeof data.value !== 'undefined') {
      const count = data.value;
      if (statBox) statBox.innerText = count;
    }
  } catch (err) {
    console.warn("Chưa thể tải số lượng học viên:", err);
    if (statBox) statBox.innerText = "0";
  }
}

// Chỉ gọi khi có một học viên mới nhập tên lần đầu
async function registerNewUserCount() {
  const statBox = document.getElementById('stat-total-users');

  try {
    const res = await fetch(`${COUNTER_API_BASE}/hit/${USER_COUNTER_KEY}`);
    const data = await res.json();
    if (data && typeof data.value !== 'undefined') {
      const count = data.value;
      if (statBox) statBox.innerText = count;
    }
  } catch (err) {
    console.warn("Lỗi ghi nhận học viên mới:", err);
  }
}

function initTheme() {
  if (AppState.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle-btn').innerHTML = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-toggle-btn').innerHTML = '🌙';
  }
}

function toggleTheme() {
  AppState.darkMode = !AppState.darkMode;
  localStorage.setItem('gdqpan_theme', AppState.darkMode ? 'dark' : 'light');
  initTheme();
}

// ==========================================
// VIEW SWITCHING
// ==========================================
function switchView(viewName) {
  AppState.currentView = viewName;
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update specific view states
  if (viewName === 'home') {
    clearInterval(AppState.timerInterval);
    renderHomeStats();
  }
}

// ==========================================
// HOME VIEW
// ==========================================
function renderHomeStats() {
  const incorrectCount = AppState.incorrectHistory.size;
  document.getElementById('stat-incorrect-count').innerText = incorrectCount;
  
  const incorrectBtn = document.getElementById('btn-mode-incorrect');
  if (incorrectBtn) {
    incorrectBtn.style.opacity = (incorrectCount === 0) ? '0.6' : '1';
  }
}

function renderLessonsList() {
  const container = document.getElementById('lessons-checkbox-grid');
  if (!container) return;

  container.innerHTML = QUIZ_DATA.map(lesson => `
    <label class="lesson-item" for="chk-lesson-${lesson.lesson_id}">
      <input type="checkbox" class="lesson-checkbox" id="chk-lesson-${lesson.lesson_id}" value="${lesson.lesson_id}" checked>
      <div class="lesson-info">
        <div class="lesson-code">Bài ${lesson.lesson_id}</div>
        <div class="lesson-name">${lesson.lesson_title.replace(`BÀI ${lesson.lesson_id}: `, '')}</div>
        <div class="lesson-count">${lesson.question_count} câu hỏi</div>
      </div>
    </label>
  `).join('');
}

function toggleSelectAllLessons(selectAll) {
  document.querySelectorAll('.lesson-checkbox').forEach(chk => {
    chk.checked = selectAll;
  });
}

// ==========================================
// STARTING QUIZ SESSIONS
// ==========================================
function startPracticeByLessons() {
  const selectedBoxes = document.querySelectorAll('.lesson-checkbox:checked');
  if (selectedBoxes.length === 0) {
    alert("Vui lòng chọn ít nhất một bài học để luyện tập!");
    return;
  }

  const selectedIds = Array.from(selectedBoxes).map(c => parseInt(c.value));
  let pool = [];
  QUIZ_DATA.forEach(b => {
    if (selectedIds.includes(b.lesson_id)) {
      pool = pool.concat(b.questions);
    }
  });

  AppState.mode = 'practice';
  AppState.questions = pool;
  AppState.userAnswers = {};
  AppState.flaggedIds = new Set();
  AppState.instantFeedback = document.getElementById('chk-instant-feedback')?.checked ?? true;
  AppState.startTime = new Date();

  setupQuizTopbar("Luyện tập theo bài", false);
  renderAllScrollQuestions();
  switchView('quiz');
}

function startExamModal() {
  document.getElementById('exam-config-modal').classList.add('active');
}

function startExamSession(numQuestions, timeMinutes) {
  document.getElementById('exam-config-modal').classList.remove('active');
  
  let pool = [];
  QUIZ_DATA.forEach(b => {
    pool = pool.concat(b.questions);
  });

  pool = shuffleArray([...pool]);
  if (numQuestions < pool.length) {
    pool = pool.slice(0, numQuestions);
  }

  AppState.mode = 'exam';
  AppState.questions = pool;
  AppState.userAnswers = {};
  AppState.flaggedIds = new Set();
  AppState.instantFeedback = false; // Exam mode does not show answers immediately
  AppState.startTime = new Date();
  
  AppState.totalExamSeconds = timeMinutes * 60;
  AppState.timerSeconds = AppState.totalExamSeconds;

  setupQuizTopbar(`Thi thử (${pool.length} câu - ${timeMinutes} phút)`, true);
  startExamTimer();
  renderAllScrollQuestions();
  switchView('quiz');
}

function startMarathonSession() {
  let pool = [];
  QUIZ_DATA.forEach(b => {
    pool = pool.concat(b.questions);
  });

  AppState.mode = 'marathon';
  AppState.questions = pool;
  AppState.userAnswers = {};
  AppState.flaggedIds = new Set();
  AppState.instantFeedback = true;
  AppState.startTime = new Date();

  setupQuizTopbar("Luyện tập toàn bộ 386 câu", false);
  renderAllScrollQuestions();
  switchView('quiz');
}

function startReviewIncorrectSession() {
  if (AppState.incorrectHistory.size === 0) {
    alert("Tuyệt vời! Hiện tại bạn không có câu hỏi nào bị làm sai.");
    return;
  }

  let pool = [];
  QUIZ_DATA.forEach(b => {
    b.questions.forEach(q => {
      if (AppState.incorrectHistory.has(q.global_id)) {
        pool.push(q);
      }
    });
  });

  AppState.mode = 'incorrect';
  AppState.questions = pool;
  AppState.userAnswers = {};
  AppState.flaggedIds = new Set();
  AppState.instantFeedback = true;
  AppState.startTime = new Date();

  setupQuizTopbar(`Ôn tập ${pool.length} câu sai`, false);
  renderAllScrollQuestions();
  switchView('quiz');
}

// ==========================================
// TIMER FUNCTIONALITY
// ==========================================
function startExamTimer() {
  clearInterval(AppState.timerInterval);
  updateTimerDisplay();

  AppState.timerInterval = setInterval(() => {
    AppState.timerSeconds--;
    updateTimerDisplay();

    if (AppState.timerSeconds <= 0) {
      clearInterval(AppState.timerInterval);
      alert("Hết giờ làm bài! Hệ thống sẽ tự động thu bài của bạn.");
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const badge = document.getElementById('quiz-timer');
  if (!badge) return;

  const mins = Math.floor(AppState.timerSeconds / 60);
  const secs = AppState.timerSeconds % 60;
  badge.innerText = `⏱ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (AppState.timerSeconds < 180) {
    badge.classList.add('danger');
  } else {
    badge.classList.remove('danger');
  }
}

// ==========================================
// CONTINUOUS SCROLL RENDERING (CUỘN XUỐNG LÀM TIẾP)
// ==========================================
function setupQuizTopbar(title, hasTimer) {
  document.getElementById('quiz-mode-title').innerText = title;
  const timerBadge = document.getElementById('quiz-timer');
  timerBadge.style.display = hasTimer ? 'inline-flex' : 'none';

  const feedbackWrap = document.getElementById('instant-feedback-toggle-wrap');
  if (feedbackWrap) {
    if (AppState.mode === 'exam') {
      feedbackWrap.style.display = 'none';
    } else {
      feedbackWrap.style.display = 'flex';
      document.getElementById('chk-quiz-feedback').checked = AppState.instantFeedback;
    }
  }
}

function renderAllScrollQuestions() {
  const container = document.getElementById('quiz-scroll-container');
  container.innerHTML = '';

  const total = AppState.questions.length;

  // Build each question card
  AppState.questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'q-scroll-card';
    card.id = `q-card-${idx}`;

    card.innerHTML = `
      <div class="q-card-header">
        <div class="q-badges">
          <span class="q-number-tag">Câu ${idx + 1}</span>
          <span class="q-lesson-tag">Bài ${q.lesson_id}</span>
        </div>
        <button class="btn-flag-card ${AppState.flaggedIds.has(q.global_id) ? 'active' : ''}" 
                id="flag-btn-${idx}" onclick="toggleFlag(${idx})">
          ${AppState.flaggedIds.has(q.global_id) ? '★ Đã đánh dấu' : '☆ Đánh dấu'}
        </button>
      </div>

      <div class="q-scroll-title">${escapeHtml(q.q)}</div>

      <div class="q-scroll-options" id="opt-wrap-${idx}">
        ${['A', 'B', 'C'].map(letter => `
          <div class="opt-scroll-item" id="opt-${idx}-${letter}" onclick="selectAnswer(${idx}, '${letter}')">
            <div class="opt-scroll-letter">${letter}</div>
            <div class="opt-scroll-text">${escapeHtml(q.options[letter])}</div>
          </div>
        `).join('')}
      </div>

      <div class="q-scroll-feedback" id="feedback-${idx}"></div>
    `;

    container.appendChild(card);
  });

  // Render Palette in Sidebar & Modal
  renderSidebarPalette();
  updateProgressStats();
}

function renderSidebarPalette() {
  const sidebarGrid = document.getElementById('sidebar-palette-grid');
  const modalGrid = document.getElementById('modal-palette-grid');
  
  const generatePaletteHtml = () => AppState.questions.map((q, idx) => {
    let stateClass = '';
    const ans = AppState.userAnswers[q.global_id];
    if (ans !== undefined) {
      if (AppState.instantFeedback) {
        stateClass += (ans === q.key) ? ' correct' : ' wrong';
      } else {
        stateClass += ' answered';
      }
    }
    if (AppState.flaggedIds.has(q.global_id)) {
      stateClass += ' flagged';
    }

    return `<button class="palette-btn ${stateClass}" id="p-btn-${idx}" onclick="scrollToQuestion(${idx})">${idx + 1}</button>`;
  }).join('');

  const html = generatePaletteHtml();
  if (sidebarGrid) sidebarGrid.innerHTML = html;
  if (modalGrid) modalGrid.innerHTML = html;
}

function scrollToQuestion(idx) {
  // If modal was open, close it
  document.getElementById('palette-modal').classList.remove('active');

  const card = document.getElementById(`q-card-${idx}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('active-jump');
    setTimeout(() => {
      card.classList.remove('active-jump');
    }, 1500);
  }
}

function selectAnswer(questionIndex, letter) {
  const q = AppState.questions[questionIndex];
  AppState.userAnswers[q.global_id] = letter;

  // Track incorrect history
  if (letter !== q.key) {
    AppState.incorrectHistory.add(q.global_id);
    saveIncorrectHistory();
  } else if (AppState.mode === 'incorrect') {
    AppState.incorrectHistory.delete(q.global_id);
    saveIncorrectHistory();
  }

  // Update Question Card UI
  ['A', 'B', 'C'].forEach(optLetter => {
    const el = document.getElementById(`opt-${questionIndex}-${optLetter}`);
    if (!el) return;

    el.className = 'opt-scroll-item';
    if (optLetter === letter) {
      el.classList.add('selected');
    }

    if (AppState.instantFeedback) {
      if (optLetter === q.key) {
        el.classList.add('correct');
      } else if (optLetter === letter) {
        el.classList.add('wrong');
      }
    }
  });

  // Feedback Banner
  const feedbackEl = document.getElementById(`feedback-${questionIndex}`);
  if (AppState.instantFeedback) {
    if (letter === q.key) {
      feedbackEl.className = 'q-scroll-feedback show-correct';
      feedbackEl.innerHTML = `✓ Chính xác! Đáp án đúng là <strong>${q.key}</strong>.`;
    } else {
      feedbackEl.className = 'q-scroll-feedback show-wrong';
      feedbackEl.innerHTML = `✗ Chưa chính xác! Đáp án đúng là <strong>${q.key}</strong>: ${escapeHtml(q.options[q.key])}`;
    }
  } else {
    feedbackEl.className = 'q-scroll-feedback';
    feedbackEl.innerHTML = '';
  }

  // Update Palette buttons (sidebar & modal)
  const pBtn = document.getElementById(`p-btn-${questionIndex}`);
  if (pBtn) {
    pBtn.className = 'palette-btn';
    if (AppState.instantFeedback) {
      pBtn.classList.add(letter === q.key ? 'correct' : 'wrong');
    } else {
      pBtn.classList.add('answered');
    }
    if (AppState.flaggedIds.has(q.global_id)) {
      pBtn.classList.add('flagged');
    }
  }

  updateProgressStats();
}

function toggleFlag(questionIndex) {
  const q = AppState.questions[questionIndex];
  if (AppState.flaggedIds.has(q.global_id)) {
    AppState.flaggedIds.delete(q.global_id);
  } else {
    AppState.flaggedIds.add(q.global_id);
  }

  const flagBtn = document.getElementById(`flag-btn-${questionIndex}`);
  if (flagBtn) {
    const isFlagged = AppState.flaggedIds.has(q.global_id);
    flagBtn.classList.toggle('active', isFlagged);
    flagBtn.innerHTML = isFlagged ? '★ Đã đánh dấu' : '☆ Đánh dấu';
  }

  const pBtn = document.getElementById(`p-btn-${questionIndex}`);
  if (pBtn) {
    pBtn.classList.toggle('flagged', AppState.flaggedIds.has(q.global_id));
  }
}

function updateProgressStats() {
  const total = AppState.questions.length;
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  // Progress Bar
  const fill = document.getElementById('quiz-progress-fill');
  if (fill) fill.style.width = `${percent}%`;

  // Sidebar counters
  const sidebarProgress = document.getElementById('sidebar-progress-text');
  if (sidebarProgress) sidebarProgress.innerText = `${answeredCount}/${total}`;

  const sidebarPercent = document.getElementById('sidebar-answered-percent');
  if (sidebarPercent) sidebarPercent.innerText = `${percent}%`;

  // Mobile counter
  const mobileProgress = document.getElementById('mobile-progress-text');
  if (mobileProgress) mobileProgress.innerText = `Đã làm: ${answeredCount}/${total} (${percent}%)`;
}

// ==========================================
// SUBMIT EXAM & RESULTS
// ==========================================
function confirmSubmitExam() {
  const total = AppState.questions.length;
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const remaining = total - answeredCount;

  let msg = `Bạn đã hoàn thành ${answeredCount}/${total} câu hỏi.`;
  if (remaining > 0) {
    msg += ` Còn ${remaining} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài không?`;
  } else {
    msg += ` Bạn có chắc chắn muốn nộp bài để xem kết quả không?`;
  }

  if (confirm(msg)) {
    submitExam(false);
  }
}

function submitExam(isAutoSubmit = false) {
  clearInterval(AppState.timerInterval);
  AppState.endTime = new Date();

  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  AppState.questions.forEach(q => {
    const userAns = AppState.userAnswers[q.global_id];
    if (userAns === undefined) {
      unansweredCount++;
    } else if (userAns === q.key) {
      correctCount++;
    } else {
      wrongCount++;
      AppState.incorrectHistory.add(q.global_id);
    }
  });

  saveIncorrectHistory();

  const total = AppState.questions.length;
  const score10 = ((correctCount / total) * 10).toFixed(1);
  const percent = Math.round((correctCount / total) * 100);

  const timeDiffSec = Math.round((AppState.endTime - AppState.startTime) / 1000);
  const timeFormatted = `${Math.floor(timeDiffSec / 60)} phút ${timeDiffSec % 60} giây`;

  // Render Result Screen
  document.getElementById('res-score-10').innerText = score10;
  document.getElementById('res-correct-count').innerText = `${correctCount}/${total}`;
  document.getElementById('res-wrong-count').innerText = wrongCount;
  document.getElementById('res-time-taken').innerText = timeFormatted;

  const verdictEl = document.getElementById('res-verdict');
  const msgEl = document.getElementById('res-message');

  if (score10 >= 8.5) {
    verdictEl.innerText = "🎉 XUẤT SẮC!";
    verdictEl.style.color = "var(--success)";
    msgEl.innerText = `Bạn đạt ${percent}% điểm số! Kiến thức GDQP-AN của bạn rất vững vàng, sẵn sàng đạt điểm tuyệt đối trong kỳ thi.`;
  } else if (score10 >= 7.0) {
    verdictEl.innerText = "👏 RẤT TỐT (GIỎI)!";
    verdictEl.style.color = "var(--primary)";
    msgEl.innerText = `Bạn đạt ${percent}% điểm số. Kết quả rất khả quan, hãy ôn thêm vài câu còn chưa chắc chắn nhé.`;
  } else if (score10 >= 5.0) {
    verdictEl.innerText = "✓ ĐẠT YÊU CẦU";
    verdictEl.style.color = "var(--warning)";
    msgEl.innerText = `Bạn đạt ${percent}% điểm số (qua môn). Nên luyện tập lại các câu đã làm sai để củng cố điểm cao hơn.`;
  } else {
    verdictEl.innerText = "⚠️ CHƯA ĐẠT";
    verdictEl.style.color = "var(--danger)";
    msgEl.innerText = `Bạn đạt ${percent}% điểm số. Hãy rà soát lại các bài lý luận cốt lõi và luyện tập thêm nhé.`;
  }

  // Render detailed review list
  renderDetailedReview('all');

  switchView('result');

  // Hiển thị tên học viên trên bài làm
  const userName = localStorage.getItem(USERNAME_STORAGE_KEY) || 'Chiến sĩ';
  const resStudentNameEl = document.getElementById('res-student-name');
  if (resStudentNameEl) {
    resStudentNameEl.innerText = userName;
  }

  // Tự động gửi kết quả bài thi lên Google Sheets
  sendToGoogleSheet({
    type: 'exam_result',
    name: userName,
    mode: AppState.mode === 'exam' ? 'Thi thử 40 câu' : (AppState.mode === 'marathon' ? 'Luyện 386 câu' : 'Luyện theo bài'),
    score: `${score10}/10`,
    correct: `${correctCount}/${total}`,
    timeTaken: timeFormatted,
    verdict: verdictEl ? verdictEl.innerText.replace(/^[^\w\s\u00C0-\u1EF9]+/, '').trim() : '',
    device: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Điện thoại' : 'Máy tính'
  });
}

function renderDetailedReview(filter = 'all') {
  const container = document.getElementById('review-questions-list');
  container.innerHTML = '';

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  AppState.questions.forEach((q, idx) => {
    const userAns = AppState.userAnswers[q.global_id];
    const isCorrect = userAns === q.key;
    const isAnswered = userAns !== undefined;

    if (filter === 'correct' && !isCorrect) return;
    if (filter === 'wrong' && isCorrect) return;

    const item = document.createElement('div');
    item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

    let statusPill = isCorrect
      ? `<span style="color:var(--success); font-weight:700;">✓ Đúng</span>`
      : (isAnswered ? `<span style="color:var(--danger); font-weight:700;">✗ Sai</span>` : `<span style="color:var(--text-muted); font-weight:700;">○ Bỏ trống</span>`);

    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--accent);">Câu ${idx + 1} • Bài ${q.lesson_id}</span>
        ${statusPill}
      </div>
      <div class="review-q-title">${escapeHtml(q.q)}</div>
      <div class="review-options">
        ${['A', 'B', 'C'].map(opt => {
          let optClass = 'review-option';
          let note = '';
          if (opt === q.key) {
            optClass += ' correct-answer';
            note = ' [ĐÁP ÁN ĐÚNG]';
          } else if (userAns === opt) {
            optClass += ' user-picked-wrong';
            note = ' [BẠN ĐÃ CHỌN]';
          }
          return `<div class="${optClass}"><strong>${opt}.</strong> ${escapeHtml(q.options[opt])}${note}</div>`;
        }).join('')}
      </div>
    `;

    container.appendChild(item);
  });
}

function retryWrongFromSession() {
  const wrongQuestions = AppState.questions.filter(q => AppState.userAnswers[q.global_id] !== q.key);
  if (wrongQuestions.length === 0) {
    alert("Bạn không làm sai câu nào trong đề này!");
    return;
  }

  AppState.mode = 'practice';
  AppState.questions = wrongQuestions;
  AppState.userAnswers = {};
  AppState.flaggedIds = new Set();
  AppState.instantFeedback = true;
  AppState.startTime = new Date();

  setupQuizTopbar(`Làm lại ${wrongQuestions.length} câu sai của đề`, false);
  renderAllScrollQuestions();
  switchView('quiz');
}

// ==========================================
// QUESTION BANK SEARCH VIEW
// ==========================================
function openQuestionBankView() {
  const selectEl = document.getElementById('bank-lesson-filter');
  selectEl.innerHTML = `<option value="all">Tất cả 11 bài học (386 câu)</option>` + 
    QUIZ_DATA.map(l => `<option value="${l.lesson_id}">Bài ${l.lesson_id}: ${l.lesson_title.replace(`BÀI ${l.lesson_id}: `, '')} (${l.question_count} câu)</option>`).join('');

  renderBankList();
  switchView('bank');
}

function renderBankList() {
  const keyword = document.getElementById('bank-search-input').value.trim().toLowerCase();
  const selectedLesson = document.getElementById('bank-lesson-filter').value;
  const container = document.getElementById('bank-results-container');
  container.innerHTML = '';

  let allQ = [];
  QUIZ_DATA.forEach(b => {
    if (selectedLesson === 'all' || selectedLesson === String(b.lesson_id)) {
      allQ = allQ.concat(b.questions);
    }
  });

  if (keyword) {
    allQ = allQ.filter(q => q.q.toLowerCase().includes(keyword) || 
      q.options['A'].toLowerCase().includes(keyword) ||
      q.options['B'].toLowerCase().includes(keyword) ||
      q.options['C'].toLowerCase().includes(keyword)
    );
  }

  document.getElementById('bank-results-count').innerText = `Tìm thấy ${allQ.length} câu hỏi phù hợp`;

  if (allQ.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-muted);">Không tìm thấy câu hỏi nào phù hợp với từ khóa tìm kiếm.</div>`;
    return;
  }

  const displayList = allQ.slice(0, 100);

  displayList.forEach((q) => {
    const card = document.createElement('div');
    card.className = 'review-item';
    card.style.borderLeft = '5px solid var(--primary)';
    
    card.innerHTML = `
      <div style="font-size:0.8rem; font-weight:700; color:var(--accent); margin-bottom:4px;">
        Bài ${q.lesson_id} • Câu ${q.id} (Mã toàn cục #${q.global_id})
      </div>
      <div class="review-q-title">${escapeHtml(q.q)}</div>
      <div class="review-options">
        ${['A', 'B', 'C'].map(opt => `
          <div class="review-option ${opt === q.key ? 'correct-answer' : ''}">
            <strong>${opt}.</strong> ${escapeHtml(q.options[opt])} ${opt === q.key ? ' ✓' : ''}
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(card);
  });

  if (allQ.length > 100) {
    const moreNotice = document.createElement('div');
    moreNotice.style.textAlign = 'center';
    moreNotice.style.padding = '1rem';
    moreNotice.style.color = 'var(--text-muted)';
    moreNotice.innerText = `... và ${allQ.length - 100} câu hỏi khác (vui lòng thu hẹp từ khóa tìm kiếm để xem chi tiết).`;
    container.appendChild(moreNotice);
  }
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // Home buttons
  document.getElementById('btn-start-selected-lessons').addEventListener('click', startPracticeByLessons);
  document.getElementById('btn-mode-exam').addEventListener('click', startExamModal);
  document.getElementById('btn-mode-marathon').addEventListener('click', startMarathonSession);
  document.getElementById('btn-mode-incorrect').addEventListener('click', startReviewIncorrectSession);
  document.getElementById('btn-mode-bank').addEventListener('click', openQuestionBankView);

  // Select all / none
  document.getElementById('btn-select-all-lessons').addEventListener('click', () => toggleSelectAllLessons(true));
  document.getElementById('btn-deselect-all-lessons').addEventListener('click', () => toggleSelectAllLessons(false));

  // Exam modal presets
  document.querySelectorAll('.btn-exam-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const qCount = parseInt(btn.dataset.questions);
      const mTime = parseInt(btn.dataset.time);
      startExamSession(qCount, mTime);
    });
  });

  document.getElementById('btn-close-exam-modal').addEventListener('click', () => {
    document.getElementById('exam-config-modal').classList.remove('active');
  });

  // Submit buttons
  document.getElementById('btn-submit-exam-top').addEventListener('click', confirmSubmitExam);
  document.getElementById('btn-submit-exam-sidebar').addEventListener('click', confirmSubmitExam);
  document.getElementById('btn-submit-exam-mobile').addEventListener('click', confirmSubmitExam);

  // Mobile palette modal toggle
  document.getElementById('btn-open-mobile-palette').addEventListener('click', () => {
    renderSidebarPalette();
    document.getElementById('palette-modal').classList.add('active');
  });
  document.getElementById('btn-close-palette').addEventListener('click', () => {
    document.getElementById('palette-modal').classList.remove('active');
  });

  // Exit quiz to home
  document.getElementById('btn-exit-quiz').addEventListener('click', () => {
    if (confirm("Bạn có chắc chắn muốn thoát về trang chủ? Tiến trình làm bài hiện tại sẽ không được lưu.")) {
      switchView('home');
    }
  });

  // Instant feedback toggle
  const chkQuizFeedback = document.getElementById('chk-quiz-feedback');
  if (chkQuizFeedback) {
    chkQuizFeedback.addEventListener('change', (e) => {
      AppState.instantFeedback = e.target.checked;
      // Re-evaluate options display
      AppState.questions.forEach((q, idx) => {
        const userAns = AppState.userAnswers[q.global_id];
        if (userAns !== undefined) {
          selectAnswer(idx, userAns);
        }
      });
    });
  }

  // Result actions
  document.getElementById('btn-res-retry-wrong').addEventListener('click', retryWrongFromSession);
  document.getElementById('btn-res-home').addEventListener('click', () => switchView('home'));
  
  // Detailed review filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderDetailedReview(btn.dataset.filter);
    });
  });

  // Question bank search inputs
  document.getElementById('bank-search-input').addEventListener('input', debounce(renderBankList, 250));
  document.getElementById('bank-lesson-filter').addEventListener('change', renderBankList);
  document.getElementById('btn-back-home-from-bank').addEventListener('click', () => switchView('home'));

  // Clear incorrect questions history
  const btnClearInc = document.getElementById('btn-clear-incorrect');
  if (btnClearInc) {
    btnClearInc.addEventListener('click', () => {
      if (AppState.incorrectHistory.size === 0) {
        alert("Hiện tại không có câu sai nào trong bộ nhớ!");
        return;
      }
      if (confirm(`Bạn có chắc chắn muốn xóa ${AppState.incorrectHistory.size} câu sai đã lưu và đặt lại về 0 không?`)) {
        AppState.incorrectHistory.clear();
        saveIncorrectHistory();
        renderHomeStats();
      }
    });
  }

  // User name badge and modal
  const btnEditUser = document.getElementById('btn-edit-username');
  if (btnEditUser) {
    btnEditUser.addEventListener('click', () => openUserNameModal(false));
  }
  const btnCloseName = document.getElementById('btn-close-name-modal');
  if (btnCloseName) {
    btnCloseName.addEventListener('click', closeUserNameModal);
  }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
