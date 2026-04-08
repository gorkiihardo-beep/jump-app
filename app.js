// ============================================================
// JumpForge - Lower Body & Vertical Jump Training App
// Free & Open Source - No paywalls, no subscriptions
// ============================================================

// --- DATA ---

const BODY_PARTS = {
    quads: { name: "Quadriceps", icon: "🦵", restHours: 48, xpPerWorkout: 15 },
    hamstrings: { name: "Hamstrings", icon: "🦵", restHours: 48, xpPerWorkout: 15 },
    glutes: { name: "Glutes", icon: "🍑", restHours: 48, xpPerWorkout: 15 },
    calves: { name: "Calves", icon: "🦶", restHours: 36, xpPerWorkout: 12 },
    hip_flexors: { name: "Hip Flexors", icon: "🔄", restHours: 36, xpPerWorkout: 10 },
    ankles: { name: "Ankles", icon: "🦶", restHours: 24, xpPerWorkout: 8 },
    feet: { name: "Feet & Toes", icon: "🦶", restHours: 24, xpPerWorkout: 8 },
    knees: { name: "Knee Stabilizers", icon: "🦿", restHours: 36, xpPerWorkout: 10 },
    adductors: { name: "Inner Thighs", icon: "🦵", restHours: 48, xpPerWorkout: 12 },
    abductors: { name: "Outer Thighs", icon: "🦵", restHours: 48, xpPerWorkout: 12 },
    shins: { name: "Tibialis / Shins", icon: "🦵", restHours: 24, xpPerWorkout: 8 },
};

const LEVEL_THRESHOLDS = [
    { level: 1, title: "Untrained", xp: 0, color: "level-1" },
    { level: 2, title: "Beginner", xp: 50, color: "level-2" },
    { level: 3, title: "Developing", xp: 150, color: "level-3" },
    { level: 4, title: "Intermediate", xp: 350, color: "level-4" },
    { level: 5, title: "Advanced", xp: 700, color: "level-5" },
    { level: 6, title: "Elite", xp: 1200, color: "level-6" },
];

const WORKOUTS = [
    {
        id: "explosive_quads",
        name: "Explosive Quad Power",
        targets: ["quads", "knees"],
        description: "Build explosive quad strength for higher jumps",
        exercises: [
            { name: "Jump Squats", sets: 4, reps: "8-10", description: "Squat down, explode up. Land softly on balls of feet." },
            { name: "Bulgarian Split Squats", sets: 3, reps: "10 each leg", description: "Rear foot elevated on bench. Keep front knee over ankle." },
            { name: "Pistol Squat Progressions", sets: 3, reps: "5 each leg", description: "Single leg squat. Use wall for balance if needed." },
            { name: "Wall Sit Hold", sets: 3, reps: "45 sec", description: "Back flat against wall, thighs parallel to ground." },
            { name: "Sissy Squats", sets: 3, reps: "8-12", description: "Lean back, bending knees forward. Targets lower quads intensely." },
        ]
    },
    {
        id: "hamstring_strength",
        name: "Hamstring Builder",
        targets: ["hamstrings", "glutes"],
        description: "Strengthen hamstrings to prevent injury and boost power",
        exercises: [
            { name: "Nordic Hamstring Curls", sets: 4, reps: "5-8", description: "Kneel, anchor feet. Lower body forward slowly, catch with hands." },
            { name: "Single-Leg Romanian Deadlift", sets: 3, reps: "10 each", description: "Hinge at hips, extend one leg back. Keep back straight." },
            { name: "Glute Bridge Marches", sets: 3, reps: "20 total", description: "In bridge position, alternate lifting knees toward chest." },
            { name: "Sliding Leg Curls", sets: 3, reps: "10-12", description: "Lie on back, feet on sliders. Curl heels toward glutes." },
            { name: "Good Mornings", sets: 3, reps: "12", description: "Hands behind head, hinge forward keeping legs slightly bent." },
        ]
    },
    {
        id: "glute_activation",
        name: "Glute Activation & Power",
        targets: ["glutes", "hip_flexors"],
        description: "Wake up and strengthen your glutes for maximum jump force",
        exercises: [
            { name: "Hip Thrusts", sets: 4, reps: "12-15", description: "Back on bench, drive hips up. Squeeze glutes hard at top." },
            { name: "Clamshells", sets: 3, reps: "15 each", description: "Side lying, knees bent. Open top knee like a clamshell." },
            { name: "Donkey Kicks", sets: 3, reps: "15 each", description: "On all fours, kick one leg up toward ceiling." },
            { name: "Fire Hydrants", sets: 3, reps: "12 each", description: "On all fours, lift knee out to the side." },
            { name: "Sumo Squat Pulses", sets: 3, reps: "20", description: "Wide stance squat, pulse at the bottom for constant tension." },
        ]
    },
    {
        id: "calf_power",
        name: "Calf Destroyer",
        targets: ["calves", "ankles"],
        description: "Build calf spring for explosive takeoffs",
        exercises: [
            { name: "Standing Calf Raises", sets: 4, reps: "20", description: "Rise onto toes, hold at top 2 sec. Slow negative." },
            { name: "Seated Calf Raises", sets: 3, reps: "15-20", description: "Sit with weight on knees, raise heels. Targets soleus." },
            { name: "Single-Leg Calf Raises", sets: 3, reps: "12 each", description: "One foot on step edge. Full range of motion." },
            { name: "Calf Jumps", sets: 4, reps: "15", description: "Small rapid jumps using only ankles. Knees barely bend." },
            { name: "Farmer Walk on Toes", sets: 3, reps: "30 sec", description: "Walk on tiptoes while holding heavy objects." },
        ]
    },
    {
        id: "ankle_stability",
        name: "Ankle & Foot Fortress",
        targets: ["ankles", "feet", "shins"],
        description: "Bulletproof your ankles and feet for safe landings",
        exercises: [
            { name: "Ankle Circles", sets: 3, reps: "15 each direction", description: "Slow controlled circles. Maximize range of motion." },
            { name: "Toe Yoga", sets: 3, reps: "10 each", description: "Lift big toe while pressing others down, then switch." },
            { name: "Tibialis Raises", sets: 3, reps: "15-20", description: "Back against wall, lift toes toward shins." },
            { name: "Balance Board Hold", sets: 3, reps: "45 sec each", description: "Single leg on unstable surface. Stay balanced." },
            { name: "Towel Scrunches", sets: 3, reps: "15", description: "Place towel on floor, scrunch it toward you with toes." },
            { name: "Heel Walks", sets: 3, reps: "30 sec", description: "Walk on heels with toes lifted. Strengthens tibialis." },
        ]
    },
    {
        id: "knee_armor",
        name: "Knee Armor",
        targets: ["knees", "quads", "hamstrings"],
        description: "Protect and strengthen the knee joint for heavy landings",
        exercises: [
            { name: "Terminal Knee Extensions", sets: 3, reps: "15 each", description: "Band around knee, extend from 30 degrees to full straight." },
            { name: "Step Downs", sets: 3, reps: "10 each", description: "Stand on step, slowly lower opposite foot to ground." },
            { name: "Spanish Squats", sets: 3, reps: "12", description: "Band behind knees anchored low. Sit back, knees stay over toes." },
            { name: "Reverse Nordics", sets: 3, reps: "8", description: "Kneel upright, lean back keeping hips extended. Targets VMO." },
            { name: "Wall Sit + Adduction", sets: 3, reps: "30 sec", description: "Wall sit while squeezing a ball between knees." },
        ]
    },
    {
        id: "hip_mobility",
        name: "Hip Mobility & Power",
        targets: ["hip_flexors", "adductors", "abductors"],
        description: "Open your hips for deeper positions and more power",
        exercises: [
            { name: "Deep Lunge Stretch", sets: 3, reps: "30 sec each", description: "Low lunge, drive hips forward. Feel the stretch in hip flexor." },
            { name: "Lateral Lunges", sets: 3, reps: "10 each", description: "Step wide to the side, sit into hip. Keep other leg straight." },
            { name: "Cossack Squats", sets: 3, reps: "8 each", description: "Deep side squat, straighten opposite leg. Full depth." },
            { name: "Copenhagen Planks", sets: 3, reps: "20 sec each", description: "Side plank with top leg on bench. Strengthens adductors." },
            { name: "Banded Lateral Walks", sets: 3, reps: "15 each way", description: "Band around ankles, walk sideways in athletic stance." },
        ]
    },
    {
        id: "plyometric_power",
        name: "Plyometric Explosion",
        targets: ["quads", "calves", "glutes", "ankles"],
        description: "Maximum jump height training with plyometrics",
        exercises: [
            { name: "Depth Jumps", sets: 4, reps: "5", description: "Step off box, land, immediately jump max height. Minimize ground time." },
            { name: "Broad Jumps", sets: 4, reps: "5", description: "Two-foot takeoff, jump as far forward as possible." },
            { name: "Tuck Jumps", sets: 3, reps: "8", description: "Jump up, pull knees to chest at peak. Land softly." },
            { name: "Single-Leg Bounds", sets: 3, reps: "6 each", description: "Leap from one foot to the other. Cover max distance each bound." },
            { name: "Box Jumps", sets: 4, reps: "5", description: "Jump onto progressively higher boxes. Step down, don't jump down." },
        ]
    },
    {
        id: "inner_outer_thigh",
        name: "Inner & Outer Thigh Sculptor",
        targets: ["adductors", "abductors", "glutes"],
        description: "Target the inner and outer thigh for lateral stability",
        exercises: [
            { name: "Sumo Squats", sets: 4, reps: "12-15", description: "Extra wide stance, toes out. Squeeze inner thighs at top." },
            { name: "Side-Lying Leg Raises", sets: 3, reps: "15 each", description: "Lie on side, raise top leg. Controlled up and down." },
            { name: "Side-Lying Adduction", sets: 3, reps: "15 each", description: "Lie on side, raise BOTTOM leg. Targets inner thigh." },
            { name: "Curtsy Lunges", sets: 3, reps: "10 each", description: "Step one leg behind and across. Dip into lunge." },
            { name: "Standing Hip Abduction", sets: 3, reps: "15 each", description: "Stand on one leg, raise other leg to the side." },
        ]
    },
    {
        id: "full_leg_burn",
        name: "Full Leg Burnout",
        targets: ["quads", "hamstrings", "glutes", "calves"],
        description: "Total lower body workout - hit everything",
        exercises: [
            { name: "Squat Jumps", sets: 3, reps: "10", description: "Deep squat, explode up. Land soft, go right into next rep." },
            { name: "Walking Lunges", sets: 3, reps: "20 total", description: "Alternate legs, step forward into deep lunge." },
            { name: "Glute Bridges", sets: 3, reps: "15", description: "Lie on back, drive hips to ceiling. Squeeze glutes at top." },
            { name: "Calf Raise to Squat", sets: 3, reps: "12", description: "Rise onto toes, then immediately squat down. Combine both." },
            { name: "Jump Lunge Switches", sets: 3, reps: "16 total", description: "Lunge position, jump and switch legs mid-air." },
            { name: "Wall Sit", sets: 2, reps: "60 sec", description: "Back against wall, hold thighs parallel. Finish strong." },
        ]
    },
];

// --- STATE ---

function getDefaultState() {
    const muscles = {};
    for (const key of Object.keys(BODY_PARTS)) {
        muscles[key] = { xp: 0, lastWorked: null };
    }
    return {
        muscles,
        history: [],
        totalWorkouts: 0,
        streakDays: [],
    };
}

const STATE_VERSION = 2;

function loadState() {
    try {
        const saved = localStorage.getItem("jumpforge_state");
        if (saved) {
            const parsed = JSON.parse(saved);
            // Clear stale data from older versions
            if (!parsed.version || parsed.version < STATE_VERSION) {
                localStorage.removeItem("jumpforge_state");
                return getDefaultState();
            }
            // Merge with defaults for any new body parts
            const defaults = getDefaultState();
            for (const key of Object.keys(defaults.muscles)) {
                if (!parsed.muscles[key]) {
                    parsed.muscles[key] = defaults.muscles[key];
                }
            }
            if (!parsed.streakDays) parsed.streakDays = [];
            return parsed;
        }
    } catch (e) {
        console.error("Failed to load state", e);
    }
    return getDefaultState();
}

function saveState() {
    state.version = STATE_VERSION;
    localStorage.setItem("jumpforge_state", JSON.stringify(state));
}

let state = loadState();

// --- HELPERS ---

function isBodyPartReady(partKey) {
    const muscle = state.muscles[partKey];
    if (!muscle.lastWorked) return true;
    const restMs = BODY_PARTS[partKey].restHours * 60 * 60 * 1000;
    return Date.now() - muscle.lastWorked >= restMs;
}

function getRestTimeRemaining(partKey) {
    const muscle = state.muscles[partKey];
    if (!muscle.lastWorked) return 0;
    const restMs = BODY_PARTS[partKey].restHours * 60 * 60 * 1000;
    const remaining = restMs - (Date.now() - muscle.lastWorked);
    return Math.max(0, remaining);
}

function formatTimeRemaining(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
}

function getLevelInfo(xp) {
    let current = LEVEL_THRESHOLDS[0];
    let next = LEVEL_THRESHOLDS[1];
    for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
        if (xp >= LEVEL_THRESHOLDS[i].xp) {
            current = LEVEL_THRESHOLDS[i];
            next = LEVEL_THRESHOLDS[i + 1] || null;
            break;
        }
    }
    const progress = next
        ? (xp - current.xp) / (next.xp - current.xp)
        : 1;
    return { ...current, next, progress: Math.min(1, progress), totalXp: xp };
}

function isWorkoutAvailable(workout) {
    return workout.targets.every(t => isBodyPartReady(t));
}

function getTodayKey() {
    return new Date().toISOString().split("T")[0];
}

function updateStreak() {
    const today = getTodayKey();
    if (!state.streakDays.includes(today)) {
        state.streakDays.push(today);
    }
    // Keep only last 365 days
    state.streakDays = state.streakDays.slice(-365);
}

function getCurrentStreak() {
    if (state.streakDays.length === 0) return 0;
    const sorted = [...state.streakDays].sort().reverse();
    const today = getTodayKey();
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    // Streak must include today or yesterday
    if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

    let streak = 1;
    for (let i = 0; i < sorted.length - 1; i++) {
        const curr = new Date(sorted[i]);
        const prev = new Date(sorted[i + 1]);
        const diff = (curr - prev) / 86400000;
        if (diff === 1) {
            streak++;
        } else {
            break;
        }
    }
    return streak;
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now - date) / 86400000);
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
}

// --- RENDERING ---

function renderStatusTab() {
    const readyList = document.getElementById("ready-list");
    const restList = document.getElementById("rest-list");

    let readyHTML = "";
    let restHTML = "";

    for (const [key, part] of Object.entries(BODY_PARTS)) {
        if (isBodyPartReady(key)) {
            readyHTML += `<span class="body-part-tag ready">${part.icon} ${part.name}</span>`;
        } else {
            const remaining = getRestTimeRemaining(key);
            restHTML += `<span class="body-part-tag resting">${part.icon} ${part.name}<span class="rest-time">${formatTimeRemaining(remaining)}</span></span>`;
        }
    }

    readyList.innerHTML = readyHTML || '<span class="empty-state">All muscles need rest</span>';
    restList.innerHTML = restHTML || '<span class="empty-state">Everything is ready!</span>';

    // Quick workout button
    const btn = document.getElementById("quick-workout-btn");
    const available = WORKOUTS.filter(w => isWorkoutAvailable(w));
    if (available.length > 0) {
        btn.disabled = false;
        btn.textContent = `Start Available Workout (${available.length} ready)`;
    } else {
        btn.disabled = true;
        btn.textContent = "All Muscles Resting";
    }
}

function renderWorkoutCategories() {
    const container = document.getElementById("workout-categories");
    let html = "";

    for (const workout of WORKOUTS) {
        const available = isWorkoutAvailable(workout);
        const targetNames = workout.targets.map(t => BODY_PARTS[t].name).join(", ");

        // Get average level of targets
        const avgXp = workout.targets.reduce((sum, t) => sum + state.muscles[t].xp, 0) / workout.targets.length;
        const levelInfo = getLevelInfo(avgXp);

        html += `
            <div class="category-card" data-workout="${workout.id}">
                <div class="category-card-header">
                    <span class="category-name">${workout.name}</span>
                    <span class="category-status ${available ? 'ready' : 'resting'}">${available ? 'Ready' : 'Resting'}</span>
                </div>
                <div class="category-muscles">${targetNames}</div>
                <div class="category-level">
                    <span class="level-badge">Lv.${levelInfo.level}</span>
                    <div class="level-bar-bg">
                        <div class="level-bar-fill" style="width: ${levelInfo.progress * 100}%"></div>
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;

    // Add click handlers
    container.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const workoutId = card.dataset.workout;
            showWorkoutDetail(workoutId);
        });
    });
}

function showWorkoutDetail(workoutId) {
    const workout = WORKOUTS.find(w => w.id === workoutId);
    if (!workout) return;

    document.getElementById("workout-categories").classList.add("hidden");
    const detail = document.getElementById("workout-detail");
    detail.classList.remove("hidden");

    const available = isWorkoutAvailable(workout);
    const targetNames = workout.targets.map(t => BODY_PARTS[t].name).join(", ");

    let exerciseHTML = "";
    for (const ex of workout.exercises) {
        exerciseHTML += `
            <div class="workout-exercise-card">
                <div class="exercise-name">${ex.name}</div>
                <div class="exercise-detail">${ex.sets} sets x ${ex.reps}</div>
                <div class="exercise-description">${ex.description}</div>
            </div>
        `;
    }

    document.getElementById("workout-detail-content").innerHTML = `
        <h2>${workout.name}</h2>
        <p class="workout-meta">${targetNames} &bull; ${workout.exercises.length} exercises</p>
        <p class="workout-meta">${workout.description}</p>
        ${exerciseHTML}
        <button class="btn btn-primary btn-large start-workout-btn"
                ${!available ? 'disabled' : ''}
                onclick="startWorkout('${workout.id}')">
            ${available ? 'Start Workout' : 'Muscles Need Rest'}
        </button>
    `;
}

function hideWorkoutDetail() {
    document.getElementById("workout-categories").classList.remove("hidden");
    document.getElementById("workout-detail").classList.add("hidden");
}

function startWorkout(workoutId) {
    const workout = WORKOUTS.find(w => w.id === workoutId);
    if (!workout || !isWorkoutAvailable(workout)) return;

    document.getElementById("workout-categories").classList.add("hidden");
    document.getElementById("workout-detail").classList.add("hidden");
    const active = document.getElementById("active-workout");
    active.classList.remove("hidden");

    document.getElementById("active-workout-title").textContent = workout.name;
    document.getElementById("active-workout-target").textContent =
        workout.targets.map(t => BODY_PARTS[t].name).join(", ");

    const exerciseList = document.getElementById("exercise-list");
    let html = "";
    workout.exercises.forEach((ex, i) => {
        html += `
            <div class="exercise-item" data-index="${i}">
                <div class="exercise-item-header">
                    <div>
                        <div class="exercise-item-name">${ex.name}</div>
                        <div class="exercise-item-sets">${ex.sets} sets x ${ex.reps}</div>
                    </div>
                    <button class="exercise-check" data-index="${i}">&#10003;</button>
                </div>
            </div>
        `;
    });
    exerciseList.innerHTML = html;

    // Check buttons
    exerciseList.querySelectorAll(".exercise-check").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("checked");
            btn.closest(".exercise-item").classList.toggle("done");
            updateCompleteButton(workout);
        });
    });

    // Complete button
    document.getElementById("complete-workout-btn").onclick = () => completeWorkout(workout);
    document.getElementById("cancel-workout-btn").onclick = () => cancelWorkout();

    updateCompleteButton(workout);
}

function updateCompleteButton(workout) {
    const checks = document.querySelectorAll(".exercise-check");
    const checked = document.querySelectorAll(".exercise-check.checked");
    const btn = document.getElementById("complete-workout-btn");

    if (checked.length === checks.length) {
        btn.disabled = false;
        btn.textContent = "Complete Workout";
    } else {
        btn.disabled = false;
        btn.textContent = `Complete Workout (${checked.length}/${checks.length})`;
    }
}

function completeWorkout(workout) {
    const checks = document.querySelectorAll(".exercise-check.checked");
    const total = document.querySelectorAll(".exercise-check").length;
    const completionRatio = checks.length / total;

    const xpGains = [];
    const levelUps = [];

    for (const target of workout.targets) {
        const basePart = BODY_PARTS[target];
        const xpGain = Math.round(basePart.xpPerWorkout * completionRatio);
        const oldLevel = getLevelInfo(state.muscles[target].xp);

        state.muscles[target].xp += xpGain;
        state.muscles[target].lastWorked = Date.now();

        const newLevel = getLevelInfo(state.muscles[target].xp);

        xpGains.push({ name: basePart.name, xp: xpGain });

        if (newLevel.level > oldLevel.level) {
            levelUps.push({ name: basePart.name, level: newLevel.level, title: newLevel.title });
        }
    }

    state.totalWorkouts++;
    state.history.unshift({
        workoutName: workout.name,
        timestamp: Date.now(),
        targets: workout.targets,
        xpGains,
        completionRatio
    });

    // Keep only last 50 history items
    state.history = state.history.slice(0, 50);

    updateStreak();
    saveState();

    // Show completion modal
    showCompletionModal(xpGains, levelUps);

    // Reset views
    document.getElementById("active-workout").classList.add("hidden");
    document.getElementById("workout-categories").classList.remove("hidden");

    renderAll();
}

function cancelWorkout() {
    document.getElementById("active-workout").classList.add("hidden");
    document.getElementById("workout-categories").classList.remove("hidden");
}

function showCompletionModal(xpGains, levelUps) {
    const modal = document.getElementById("complete-modal");
    modal.classList.remove("hidden");

    let xpHTML = "";
    for (const gain of xpGains) {
        xpHTML += `<div class="xp-gain-item">+${gain.xp} XP ${gain.name}</div>`;
    }
    document.getElementById("xp-gains").innerHTML = xpHTML;

    let levelHTML = "";
    for (const lu of levelUps) {
        levelHTML += `<div class="level-up-item">LEVEL UP! ${lu.name} → Lv.${lu.level} ${lu.title}</div>`;
    }
    document.getElementById("level-ups").innerHTML = levelHTML;

    document.getElementById("modal-close").onclick = () => {
        modal.classList.add("hidden");
    };
}

function renderStats() {
    document.getElementById("total-workouts").textContent = state.totalWorkouts;
    document.getElementById("current-streak").textContent = getCurrentStreak();

    // Muscle stats
    const container = document.getElementById("muscle-stats");
    let html = "";

    const sortedParts = Object.entries(BODY_PARTS).sort((a, b) => {
        return (state.muscles[b[0]]?.xp || 0) - (state.muscles[a[0]]?.xp || 0);
    });

    for (const [key, part] of sortedParts) {
        const xp = state.muscles[key]?.xp || 0;
        const info = getLevelInfo(xp);
        const xpInLevel = info.next ? xp - info.xp : xp;
        const xpNeeded = info.next ? info.next.xp - info.xp : xp;

        html += `
            <div class="muscle-stat-card">
                <div class="muscle-stat-header">
                    <span class="muscle-stat-name">${part.icon} ${part.name}</span>
                    <span class="muscle-stat-level ${info.color}">Lv.${info.level} ${info.title}</span>
                </div>
                <div class="muscle-level-title">${info.next ? `${xpInLevel}/${xpNeeded} XP to Lv.${info.next.level}` : 'MAX LEVEL'}</div>
                <div class="muscle-xp-bar">
                    <div class="muscle-xp-fill ${info.color}" style="width: ${info.progress * 100}%"></div>
                </div>
                <div class="muscle-xp-text">${xp} total XP</div>
            </div>
        `;
    }
    container.innerHTML = html;

    // History
    const historyContainer = document.getElementById("workout-history");
    if (state.history.length === 0) {
        historyContainer.innerHTML = '<div class="empty-state">No workouts yet. Start training!</div>';
    } else {
        let historyHTML = "";
        for (const entry of state.history.slice(0, 15)) {
            const totalXp = entry.xpGains.reduce((sum, g) => sum + g.xp, 0);
            historyHTML += `
                <div class="history-item">
                    <div>
                        <div class="history-name">${entry.workoutName}</div>
                        <div class="history-date">${formatDate(entry.timestamp)}</div>
                    </div>
                    <span class="history-xp">+${totalXp} XP</span>
                </div>
            `;
        }
        historyContainer.innerHTML = historyHTML;
    }
}

function renderAll() {
    renderStatusTab();
    renderWorkoutCategories();
    renderStats();
}

// --- TAB NAVIGATION ---

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(`${tab.dataset.tab}-tab`).classList.add("active");
    });
});

// Back button
document.getElementById("back-to-categories").addEventListener("click", hideWorkoutDetail);

// Quick workout button
document.getElementById("quick-workout-btn").addEventListener("click", () => {
    const available = WORKOUTS.filter(w => isWorkoutAvailable(w));
    if (available.length > 0) {
        // Switch to workouts tab
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        document.querySelector('[data-tab="workouts"]').classList.add("active");
        document.getElementById("workouts-tab").classList.add("active");

        // Pick a random available workout
        const random = available[Math.floor(Math.random() * available.length)];
        startWorkout(random.id);
    }
});

// Reset button
document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
        localStorage.removeItem("jumpforge_state");
        state = getDefaultState();
        renderAll();
    }
});

// --- INIT ---
renderAll();

// Refresh rest timers every minute
setInterval(() => {
    renderStatusTab();
    renderWorkoutCategories();
}, 60000);
