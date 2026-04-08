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
            { name: "Jump Squats", sets: 4, reps: "8-10", description: "Stand with feet shoulder-width apart. Lower into a deep squat with your thighs parallel to the ground, then explode upward as high as you can. Land softly on the balls of your feet and immediately sink into the next rep. Keep your core tight and arms swinging for momentum." },
            { name: "Bulgarian Split Squats", sets: 3, reps: "10 each leg", description: "Place the top of your rear foot on a bench or chair behind you. Step your front foot out far enough that your knee stays over your ankle as you lower down. Drop your back knee toward the floor, then drive up through your front heel. Keep your torso upright throughout." },
            { name: "Pistol Squat Progressions", sets: 3, reps: "5 each leg", description: "Stand on one leg with the other extended straight in front of you. Slowly lower yourself down on the standing leg as deep as you can go, then push back up. If you can't do a full pistol yet, hold onto a wall or doorframe for balance, or sit down to a chair and stand back up on one leg." },
            { name: "Wall Sit Hold", sets: 3, reps: "45 sec", description: "Press your back flat against a wall and slide down until your thighs are parallel to the ground. Your knees should be at 90 degrees directly above your ankles. Keep your back fully pressed into the wall and hold. Don't rest your hands on your thighs — let your quads do all the work." },
            { name: "Sissy Squats", sets: 3, reps: "8-12", description: "Stand next to something you can hold for balance. Rise onto the balls of your feet, then lean your torso back while bending your knees forward past your toes. Your body should form a straight line from knees to shoulders as you lower. This isolates the lower quad near the knee — go slow and controlled." },
        ]
    },
    {
        id: "hamstring_strength",
        name: "Hamstring Builder",
        targets: ["hamstrings", "glutes"],
        description: "Strengthen hamstrings to prevent injury and boost power",
        exercises: [
            { name: "Nordic Hamstring Curls", sets: 4, reps: "5-8", description: "Kneel on a pad and anchor your feet under something heavy or have a partner hold them. Keeping your body straight from knees to shoulders, slowly lower your chest toward the ground by extending at the knees. Use your hamstrings to resist gravity as long as possible, then catch yourself with your hands and push back up." },
            { name: "Single-Leg Romanian Deadlift", sets: 3, reps: "10 each", description: "Stand on one leg with a slight bend in the knee. Hinge forward at your hips, extending your free leg straight behind you as a counterbalance. Reach your hands toward the ground while keeping your back flat. You should feel a deep stretch in the hamstring of your standing leg. Squeeze your glute to return to standing." },
            { name: "Glute Bridge Marches", sets: 3, reps: "20 total", description: "Lie on your back with knees bent and feet flat on the floor. Push your hips up into a bridge so your body forms a straight line from shoulders to knees. While holding the bridge, alternate lifting each knee toward your chest like a slow march. Keep your hips level — don't let them drop or twist." },
            { name: "Sliding Leg Curls", sets: 3, reps: "10-12", description: "Lie on your back with your heels on sliders, paper plates, or a slick surface. Lift your hips into a bridge, then slowly slide your feet away from your body until your legs are nearly straight. Curl your heels back toward your glutes to return. Keep your hips up the entire time — this is harder than it looks." },
            { name: "Good Mornings", sets: 3, reps: "12", description: "Stand with feet hip-width apart and hands behind your head. With a slight bend in your knees, hinge forward at the hips pushing your butt backward. Lower your torso until you feel a stretch in your hamstrings, usually around parallel to the floor. Squeeze your hamstrings and glutes to return to standing. Keep your back flat throughout." },
        ]
    },
    {
        id: "glute_activation",
        name: "Glute Activation & Power",
        targets: ["glutes", "hip_flexors"],
        description: "Wake up and strengthen your glutes for maximum jump force",
        exercises: [
            { name: "Hip Thrusts", sets: 4, reps: "12-15", description: "Sit on the ground with your upper back resting against a bench. Roll a barbell or place a weight over your hips (or use bodyweight). Plant your feet flat and drive your hips toward the ceiling until your thighs are parallel to the floor. Squeeze your glutes hard at the top for 2 seconds, then lower slowly." },
            { name: "Clamshells", sets: 3, reps: "15 each", description: "Lie on your side with knees bent at 90 degrees and feet stacked together. Keeping your feet touching, open your top knee toward the ceiling like a clamshell opening. Don't let your hips roll backward — the rotation should come purely from your hip. Slowly lower back down. You should feel this deep in the side of your glute." },
            { name: "Donkey Kicks", sets: 3, reps: "15 each", description: "Get on all fours with hands under shoulders and knees under hips. Keeping your knee bent at 90 degrees, lift one leg up toward the ceiling like you're stamping your footprint on it. Squeeze your glute hard at the top. Don't arch your lower back — keep your core engaged and the movement controlled." },
            { name: "Fire Hydrants", sets: 3, reps: "12 each", description: "Start on all fours. Keeping your knee bent, lift one leg out to the side away from your body — like a dog at a fire hydrant. Raise it until your thigh is parallel to the floor, hold for a beat, then lower. This targets the gluteus medius on the side of your hip, which is critical for lateral stability in jumping." },
            { name: "Sumo Squat Pulses", sets: 3, reps: "20", description: "Take an extra wide stance with toes pointed outward at 45 degrees. Lower into a deep squat until your thighs are parallel, then pulse up and down just a few inches — never coming fully back up. Keep constant tension on your glutes and inner thighs for all 20 reps. Your quads should be burning by the end." },
        ]
    },
    {
        id: "calf_power",
        name: "Calf Destroyer",
        targets: ["calves", "ankles"],
        description: "Build calf spring for explosive takeoffs",
        exercises: [
            { name: "Standing Calf Raises", sets: 4, reps: "20", description: "Stand on the edge of a step with your heels hanging off. Rise up onto your toes as high as possible, squeezing your calves hard at the top for 2 seconds. Lower slowly all the way down until you feel a stretch in your calves. The slow negative is where the growth happens — don't rush the way down." },
            { name: "Seated Calf Raises", sets: 3, reps: "15-20", description: "Sit on a chair with your feet flat on the floor. Place a weight across your knees (backpack, dumbbells, etc). Press through the balls of your feet to raise your heels as high as possible. This targets the soleus muscle underneath the gastrocnemius — it's the deep calf muscle that provides endurance and spring." },
            { name: "Single-Leg Calf Raises", sets: 3, reps: "12 each", description: "Stand on one foot on the edge of a step or raised surface. Let your heel drop below the step for a full stretch, then press up onto your toes as high as you can. Hold the top for 1 second. Use a wall for balance. Single-leg work exposes and fixes any strength imbalances between your calves." },
            { name: "Calf Jumps", sets: 4, reps: "15", description: "Stand with your feet shoulder-width apart. Do small, rapid jumps using ONLY your ankles and calves — your knees should barely bend. Think of bouncing off the ground like a pogo stick. The goal is quick ground contact and maximum height from your calves alone. This trains the reactive spring you need for jumping." },
            { name: "Farmer Walk on Toes", sets: 3, reps: "30 sec", description: "Pick up the heaviest objects you can carry — dumbbells, water jugs, loaded backpack. Rise up onto your toes and walk forward without letting your heels touch the ground. Keep your core tight and shoulders back. This builds calf endurance and ankle stability under load — exactly what your calves do during a jump." },
        ]
    },
    {
        id: "ankle_stability",
        name: "Ankle & Foot Fortress",
        targets: ["ankles", "feet", "shins"],
        description: "Bulletproof your ankles and feet for safe landings",
        exercises: [
            { name: "Ankle Circles", sets: 3, reps: "15 each direction", description: "Sit or stand on one leg with the other foot off the ground. Draw slow, controlled circles with your toes — make them as big as possible. Do 15 clockwise, then 15 counterclockwise on each foot. Focus on maximizing your ankle's range of motion in every direction. This warms up and mobilizes the joint." },
            { name: "Toe Yoga", sets: 3, reps: "10 each", description: "Stand barefoot. Lift your big toe while keeping your other four toes pressed into the ground. Hold 3 seconds. Then press your big toe down and lift the other four toes. This teaches independent toe control, which improves your balance and foot grip during takeoff and landing. It's harder than it sounds — be patient." },
            { name: "Tibialis Raises", sets: 3, reps: "15-20", description: "Stand with your back against a wall and your feet about 12 inches out from it. Keeping your heels on the ground, lift your toes and the balls of your feet as high as you can toward your shins. Hold the top for 1 second. This strengthens the tibialis anterior on the front of your shin — the muscle that prevents shin splints and controls landing." },
            { name: "Balance Board Hold", sets: 3, reps: "45 sec each", description: "Stand on one foot on an unstable surface — a balance board, folded towel, or pillow. Keep your standing leg slightly bent and focus on staying balanced without touching down. Your ankle will make constant micro-adjustments — that's exactly the point. These stabilizer muscles protect you from ankle rolls during landing." },
            { name: "Towel Scrunches", sets: 3, reps: "15", description: "Place a towel flat on the floor in front of you. Sit or stand with your bare foot on the edge of the towel. Using only your toes, scrunch the towel toward you, pulling it under your foot one grab at a time. This strengthens the intrinsic muscles in the arch of your foot that act like springs during jumping." },
            { name: "Heel Walks", sets: 3, reps: "30 sec", description: "Stand up and lift your toes completely off the ground so you're balancing on your heels only. Walk forward in a straight line for 30 seconds without letting your toes touch down. This directly strengthens the tibialis anterior and the muscles on the front of your lower leg. Pair this with calf work for balanced lower legs." },
        ]
    },
    {
        id: "knee_armor",
        name: "Knee Armor",
        targets: ["knees", "quads", "hamstrings"],
        description: "Protect and strengthen the knee joint for heavy landings",
        exercises: [
            { name: "Terminal Knee Extensions", sets: 3, reps: "15 each", description: "Loop a resistance band around something sturdy at knee height and step into it so it sits behind your knee. Step back to create tension. Start with your knee slightly bent at about 30 degrees, then squeeze your quad to straighten your leg completely against the band's resistance. This isolates the VMO — the teardrop muscle above your kneecap that stabilizes the joint." },
            { name: "Step Downs", sets: 3, reps: "10 each", description: "Stand on a step, box, or stair on one leg with the other foot hanging off the edge. Slowly bend your standing leg to lower your free foot toward the ground — take a full 3-4 seconds going down. Lightly tap the ground then drive back up. Don't let your knee cave inward. This builds eccentric control, which is exactly what your knees need for absorbing jump landings." },
            { name: "Spanish Squats", sets: 3, reps: "12", description: "Loop a heavy resistance band behind both knees and anchor the other end low and behind you. Lean back into the band and sit into a squat, letting the band pull your shins vertical. Your knees should stay directly over your toes while your weight shifts to your heels. This deloads the knee joint while heavily working the quads — it's physical therapy gold for knee health." },
            { name: "Reverse Nordics", sets: 3, reps: "8", description: "Kneel upright on a pad with your shins flat on the ground and toes pointed back. Keeping your hips fully extended (don't sit back toward your heels), lean your entire body backward by bending only at the knees. Go as far back as you can control, then squeeze your quads to pull yourself back upright. This strengthens the quad-tendon connection that protects the knee." },
            { name: "Wall Sit + Adduction", sets: 3, reps: "30 sec", description: "Get into a wall sit position with your back flat against the wall and thighs parallel to the ground. Place a ball, pillow, or rolled-up towel between your knees. Squeeze it hard while holding the wall sit. This activates the adductors, which help track the kneecap properly and prevent it from pulling to one side during heavy movements." },
        ]
    },
    {
        id: "hip_mobility",
        name: "Hip Mobility & Power",
        targets: ["hip_flexors", "adductors", "abductors"],
        description: "Open your hips for deeper positions and more power",
        exercises: [
            { name: "Deep Lunge Stretch", sets: 3, reps: "30 sec each", description: "Step into a deep lunge with your back knee on the ground. Push your hips forward and down while keeping your torso upright. You should feel an intense stretch in the hip flexor of your back leg. For a deeper stretch, raise the arm on the same side as your back leg overhead and lean slightly away. Tight hip flexors limit your jump power — this opens them up." },
            { name: "Lateral Lunges", sets: 3, reps: "10 each", description: "Stand with feet together, then take a wide step directly to one side. Bend the stepping leg and sit your hips back into it while keeping the other leg completely straight. Push off your bent leg to return to center. Keep your foot flat and toes pointing forward on both feet. This opens up the groin and builds lateral strength." },
            { name: "Cossack Squats", sets: 3, reps: "8 each", description: "Take a very wide stance. Shift your weight to one leg and squat down as deep as possible on that side while straightening the other leg completely. Your straight leg's toes can point upward. At the bottom, your squatting hip should be below your knee. Alternate sides. This is the ultimate lower body mobility exercise — go only as deep as you can control." },
            { name: "Copenhagen Planks", sets: 3, reps: "20 sec each", description: "Lie on your side in a side plank position. Place your top leg on a bench with the inside of your knee or ankle on the edge. Lift your body up into a side plank supported by your elbow and top leg. Your bottom leg hangs free. This is an intense adductor (inner thigh) strengthener — these muscles are often neglected but crucial for knee stability and lateral movement." },
            { name: "Banded Lateral Walks", sets: 3, reps: "15 each way", description: "Place a resistance band around your ankles (or just above your knees for less difficulty). Get into a quarter-squat athletic stance. Step sideways, leading with one foot and following with the other — maintain tension on the band throughout and don't let your feet come close together. Keep your hips low the entire time. This fires up the gluteus medius for hip stability." },
        ]
    },
    {
        id: "plyometric_power",
        name: "Plyometric Explosion",
        targets: ["quads", "calves", "glutes", "ankles"],
        description: "Maximum jump height training with plyometrics",
        exercises: [
            { name: "Depth Jumps", sets: 4, reps: "5", description: "Stand on top of a box or sturdy platform (start with 12-18 inches). Step off the box — don't jump off — and as soon as your feet hit the ground, immediately explode upward into the highest jump you can. Spend as little time on the ground as possible. The goal is to absorb the landing and redirect that force upward. This is the #1 exercise for reactive jump power." },
            { name: "Broad Jumps", sets: 4, reps: "5", description: "Stand with feet shoulder-width apart. Swing your arms back as you hinge your hips, then explode forward and upward, throwing your arms forward for momentum. Jump as far forward as possible and land on both feet with bent knees. Stick the landing for 2 seconds before resetting. Focus on a powerful arm swing and full hip extension." },
            { name: "Tuck Jumps", sets: 3, reps: "8", description: "Stand with feet hip-width apart and jump straight up as high as you can. At the peak of your jump, pull both knees up toward your chest, grabbing them briefly if you can. Extend your legs back down to land softly on the balls of your feet with bent knees. The higher you pull your knees, the more explosive power you're building." },
            { name: "Single-Leg Bounds", sets: 3, reps: "6 each", description: "Start on one foot and leap forward as far as you can, landing on the opposite foot. Immediately spring off that foot into the next bound. Think of an exaggerated running stride where you're trying to cover maximum distance with each leap. Pump your arms hard. This builds the unilateral power you need for running jumps and single-leg takeoffs." },
            { name: "Box Jumps", sets: 4, reps: "5", description: "Stand in front of a sturdy box or platform. Dip into a quarter squat, swing your arms, and jump onto the box landing with both feet. Stand up fully on top. Step back down — never jump down, as the landing impact provides no benefit and risks injury. Gradually increase box height over weeks as you improve. Full hip extension at the top counts as one rep." },
        ]
    },
    {
        id: "inner_outer_thigh",
        name: "Inner & Outer Thigh Sculptor",
        targets: ["adductors", "abductors", "glutes"],
        description: "Target the inner and outer thigh for lateral stability",
        exercises: [
            { name: "Sumo Squats", sets: 4, reps: "12-15", description: "Take an extra-wide stance with your toes pointed out at about 45 degrees. Lower straight down by bending your knees out over your toes until your thighs are parallel to the floor. Drive back up through your heels and squeeze your inner thighs together at the top. Keep your torso upright and core tight — don't lean forward." },
            { name: "Side-Lying Leg Raises", sets: 3, reps: "15 each", description: "Lie on your side with your body in a straight line. Keeping your top leg straight and your toe pointing slightly downward, raise it toward the ceiling as high as you can. Pause at the top for 1 second, then lower slowly — don't just drop it. Keep your hips stacked and don't roll backward. This isolates the outer thigh and glute medius." },
            { name: "Side-Lying Adduction", sets: 3, reps: "15 each", description: "Lie on your side but this time cross your top leg over and plant that foot flat on the floor in front of you. Now raise your BOTTOM leg up toward the ceiling. You won't get much height — that's normal. This targets the inner thigh (adductor) of the bottom leg, which is one of the most under-trained muscle groups in the lower body." },
            { name: "Curtsy Lunges", sets: 3, reps: "10 each", description: "Stand with feet hip-width apart. Step one leg diagonally behind you and across your body, like you're doing a curtsy. Lower into a lunge until your front thigh is parallel to the floor. Your front knee should stay over your ankle. Drive back up through your front heel. This hits the glute medius and inner thigh from an angle that regular lunges miss." },
            { name: "Standing Hip Abduction", sets: 3, reps: "15 each", description: "Stand on one leg, holding something for balance. Keep your standing leg slightly bent and your lifted leg straight. Raise your straight leg out to the side as high as you can while keeping your hips level — don't lean to the opposite side. Slowly lower back down. Add an ankle weight or resistance band to increase difficulty as you get stronger." },
        ]
    },
    {
        id: "full_leg_burn",
        name: "Full Leg Burnout",
        targets: ["quads", "hamstrings", "glutes", "calves"],
        description: "Total lower body workout - hit everything",
        exercises: [
            { name: "Squat Jumps", sets: 3, reps: "10", description: "Drop into a deep squat with your thighs at least parallel to the ground, then explode upward into the highest jump you can. Land softly on the balls of your feet and immediately sink into the next squat. No pausing between reps — the continuous movement is what makes this a burnout. Swing your arms for extra height." },
            { name: "Walking Lunges", sets: 3, reps: "20 total", description: "Take a big step forward and lower your back knee toward the ground until both legs are at 90 degrees. Push off your front foot and step your back leg through into the next lunge without stopping. Alternate legs for 20 total steps (10 each side). Keep your torso upright and your core engaged. Long steps target glutes more, shorter steps target quads more." },
            { name: "Glute Bridges", sets: 3, reps: "15", description: "Lie on your back with knees bent and feet flat on the floor, hip-width apart. Drive through your heels to lift your hips toward the ceiling until your body forms a straight line from shoulders to knees. Squeeze your glutes as hard as possible at the top for 2 seconds, then lower slowly. Don't push from your lower back — all the effort should come from your glutes." },
            { name: "Calf Raise to Squat", sets: 3, reps: "12", description: "Start standing with feet shoulder-width apart. Rise up onto your toes for a full calf raise, hold for 1 second at the top, then while staying on your toes, lower into a squat. Stand back up still on your toes, then lower your heels. That's one rep. This combination move hammers your calves and quads simultaneously while challenging your balance." },
            { name: "Jump Lunge Switches", sets: 3, reps: "16 total", description: "Start in a lunge position with one foot forward and one back. Jump explosively upward and switch your legs mid-air, landing in a lunge with the opposite foot forward. Land softly and with control before immediately jumping into the next switch. Keep your core tight and your front knee behind your toes on each landing. 16 total means 8 switches per leg." },
            { name: "Wall Sit", sets: 2, reps: "60 sec", description: "Press your back flat against a wall and slide down until your thighs are parallel to the ground with knees at 90 degrees. Your feet should be far enough from the wall that your shins are vertical. Keep your back fully pressed into the wall and hold for the full 60 seconds. Don't rest your hands on your legs. This is the finisher — embrace the burn and don't quit early." },
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

function splitDescription(desc) {
    const first = desc.indexOf('. ');
    if (first === -1) return { short: desc, rest: '' };
    const second = desc.indexOf('. ', first + 2);
    if (second === -1) return { short: desc, rest: '' };
    return { short: desc.slice(0, second + 1), rest: desc.slice(second + 2) };
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
    workout.exercises.forEach((ex, i) => {
        const { short, rest } = splitDescription(ex.description);
        exerciseHTML += `
            <div class="workout-exercise-card">
                <div class="exercise-name">${ex.name}</div>
                <div class="exercise-detail">${ex.sets} sets x ${ex.reps}</div>
                <div class="exercise-description">${short}${rest ? `<span class="desc-more hidden"> ${rest}</span> <button class="desc-toggle" data-detail="${i}">show more...</button>` : ''}</div>
            </div>
        `;
    });

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

    // Detail toggle handlers
    document.querySelectorAll("#workout-detail-content .desc-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
            const more = btn.previousElementSibling;
            const showing = !more.classList.contains("hidden");
            more.classList.toggle("hidden");
            btn.textContent = showing ? "show more..." : "show less";
        });
    });
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
        const { short, rest } = splitDescription(ex.description);
        html += `
            <div class="exercise-item" data-index="${i}">
                <div class="exercise-item-header">
                    <div>
                        <div class="exercise-item-name">${ex.name}</div>
                        <div class="exercise-item-sets">${ex.sets} sets x ${ex.reps}</div>
                    </div>
                    <button class="exercise-check" data-index="${i}">&#10003;</button>
                </div>
                <div class="exercise-item-desc">${short}${rest ? `<span class="desc-more hidden"> ${rest}</span> <button class="desc-toggle" data-index="${i}">show more...</button>` : ''}</div>
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

    // Show more toggles
    exerciseList.querySelectorAll(".desc-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
            const more = btn.previousElementSibling;
            const showing = !more.classList.contains("hidden");
            more.classList.toggle("hidden");
            btn.textContent = showing ? "show more..." : "show less";
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

// Export data
document.getElementById("export-btn").addEventListener("click", () => {
    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jumpforge-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
});

// Import data
document.getElementById("import-btn").addEventListener("click", () => {
    document.getElementById("import-file").click();
});

document.getElementById("import-file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
        try {
            const imported = JSON.parse(evt.target.result);
            if (!imported.muscles || !imported.history) {
                alert("Invalid backup file.");
                return;
            }
            if (confirm("Replace all current data with this backup?")) {
                const defaults = getDefaultState();
                for (const key of Object.keys(defaults.muscles)) {
                    if (!imported.muscles[key]) {
                        imported.muscles[key] = defaults.muscles[key];
                    }
                }
                if (!imported.streakDays) imported.streakDays = [];
                imported.version = STATE_VERSION;
                state = imported;
                saveState();
                renderAll();
            }
        } catch (err) {
            alert("Could not read file. Make sure it's a valid JumpForge backup.");
        }
    };
    reader.readAsText(file);
    e.target.value = "";
});

// Reset button
document.getElementById("reset-btn").addEventListener("click", () => {
    const modal = document.getElementById("reset-modal");
    const confirmBtn = document.getElementById("reset-confirm-btn");
    modal.classList.remove("hidden");
    confirmBtn.disabled = true;
    let seconds = 3;
    confirmBtn.textContent = `Wait ${seconds}s...`;
    const timer = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            confirmBtn.textContent = `Wait ${seconds}s...`;
        } else {
            clearInterval(timer);
            confirmBtn.disabled = false;
            confirmBtn.textContent = "Yes, Reset Everything";
        }
    }, 1000);

    document.getElementById("reset-cancel-btn").onclick = () => {
        clearInterval(timer);
        modal.classList.add("hidden");
    };

    confirmBtn.onclick = () => {
        if (!confirmBtn.disabled) {
            clearInterval(timer);
            localStorage.removeItem("jumpforge_state");
            state = getDefaultState();
            renderAll();
            modal.classList.add("hidden");
        }
    };
});

// --- INIT ---
renderAll();

// Refresh rest timers every minute
setInterval(() => {
    renderStatusTab();
    renderWorkoutCategories();
}, 60000);
