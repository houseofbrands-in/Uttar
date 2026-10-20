export type GuidanceTopic = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string[];
  questions: string[];
  sections: {heading: string; body: string[]}[];
  verses: {chapter: number; verse: number; reason: string}[];
  action: string;
  hinglish: string;
  caution?: string;
};

export const guidanceTopics: GuidanceTopic[] = [
  {
    slug: 'bhagavad-gita-for-anxiety', title: 'Bhagavad Gita for Anxiety and Worry',
    description: 'Explore Bhagavad Gita verses about a restless mind, worry and uncertainty, with grounded reflections, practical questions and original scripture links.',
    eyebrow: 'ANXIETY & UNCERTAINTY',
    intro: [
      'When the mind repeats the same worry, it can feel as though every decision needs to be solved immediately. The Bhagavad Gita does not offer a clinical treatment for anxiety. It does, however, invite reflection on attention, practice and our relationship with uncertainty.',
      'Arjuna voices distress and confusion rather than pretending to be calm. That makes the conversation a useful place to explore what it means to act with care even when certainty is unavailable.'
    ],
    questions: ['How can I stop worrying about a future I cannot control?', 'What does the Gita say about a restless mind?', 'Can I make a decision without feeling completely fearless?'],
    sections: [
      {heading: 'A restless mind is not a personal failure',body: ['In Bhagavad Gita 6.26, the text describes bringing the wandering mind back. The emphasis on returning to attention offers a gentle analogy: a worry returning does not make a person unsuccessful; noticing and redirecting attention can be practiced again.', 'This is a philosophical perspective, not a claim that reading scripture will cure an anxiety condition.']},
      {heading: 'Distinguish your action from the outcome',body: ['Bhagavad Gita 2.47 concerns action and attachment to the fruits of action. For a modern decision, that can mean making a sensible plan and doing the next honest step without demanding certainty about every result.', 'It does not mean accepting preventable harm, ignoring professional advice or refusing to plan.']},
      {heading: 'Try one grounded reflection',body: ['Write down the specific problem you are facing, what is within your influence today, and what remains uncertain. Choose one manageable action, such as preparing a question for a trusted person or completing one practical task.', 'If worry is persistent, overwhelming or affecting sleep and daily life, seek help from a qualified mental-health professional.']}
    ],
    verses: [{chapter:6,verse:26,reason:'Returning the wandering mind to attention'},{chapter:2,verse:47,reason:'Action without certainty over outcomes'},{chapter:6,verse:35,reason:'Practice and steadiness'}],
    action: 'Make two short lists: “What I can do today” and “What I cannot know yet.” Pick one action from the first list.',
    hinglish: 'Mujhe future ki bahut tension hoti hai. Main kya karu?',
    caution:'This page offers spiritual reflection, not diagnosis or treatment. If you have severe anxiety, panic symptoms or concerns about your safety, seek qualified medical or mental-health support.'
  },
  {
    slug:'bhagavad-gita-for-stress',title:'Bhagavad Gita for Stress and Overthinking',
    description:'Thoughtful Bhagavad Gita reflections on stress, overthinking, balanced routines and focus, with linked Sanskrit verses and practical next steps.',
    eyebrow:'STRESS & OVERTHINKING',
    intro:['A busy schedule can make even small choices feel urgent. Stress at work, school or home is often shaped by practical pressures that need practical responses—not just inspirational words.','The Bhagavad Gita gives us a way to reflect on steadiness, moderation and the difference between meaningful effort and endless mental rehearsal.'],
    questions:['What does the Gita say about overthinking?','How can I handle work stress without giving up?','Is rest part of a disciplined life?'],
    sections:[
      {heading:'Balance is different from doing more',body:['Bhagavad Gita 6.17 speaks about moderation in eating, recreation, work and sleep. Read in context, this is a teaching about discipline and balance, not a demand to push through exhaustion.','A present-day application might be to look at whether the schedule itself is sustainable. Stress cannot always be resolved by changing one’s thoughts; sometimes workload, money, relationships or health need attention.']},
      {heading:'Do the task in front of you',body:['Gita 2.48 discusses an evenness of mind in action. That does not eliminate disappointment or turn us into machines. It can help frame the question: what would careful work look like if I were less occupied by imagined praise or criticism?','If you are overthinking a meeting or exam, a preparation checklist may help more than rehearsing every possible outcome.']},
      {heading:'Recognize your limits',body:['The Gita’s reflections are not a substitute for breaks, social support or medical care. You can be committed and still ask for help, renegotiate an unreasonable deadline or change a routine.','Take one step that reduces an actual source of stress rather than only trying to feel less stressed about it.']}
    ],
    verses:[{chapter:6,verse:17,reason:'Moderation and everyday balance'},{chapter:2,verse:48,reason:'Equanimity while acting'},{chapter:6,verse:26,reason:'Attention when the mind wanders'}],
    action:'Write your three most urgent commitments. Choose one to finish, one to delegate or discuss, and one that can wait.',
    hinglish:'Office ka stress aur overthinking bahut ho rahi hai, kya karu?',
    caution:'If stress is affecting your health, sleep or ability to function, consider talking with a qualified health professional.'
  },
  {
    slug:'bhagavad-gita-for-money-problems',title:'Bhagavad Gita on Money Worries and Financial Decisions',
    description:'Explore how Bhagavad Gita teachings on action, values and restraint can inform reflection during money stress, without replacing financial advice.',
    eyebrow:'MONEY & FINANCIAL PRESSURE',
    intro:['Worries about salary, debt, business losses or family expenses are real. They need numbers, conversations and sometimes professional advice. Spiritual reflection should not be used to explain away financial difficulty or promise that prosperity will arrive.','The Bhagavad Gita can instead help frame values: acting responsibly, being honest about consequences and not letting fear or greed make every decision.'],
    questions:['What can I do when money worries occupy my mind?','Does the Gita promise financial success?','How do I make a careful choice while under pressure?'],
    sections:[
      {heading:'No promise of wealth or a particular outcome',body:['Gita 2.47 speaks about the relationship between action and results. It does not promise that an investment, job or business will succeed. The useful distinction is between the work you can assess and the future you cannot guarantee.','A financial choice still requires understanding risk, cash flow, legal obligations and family responsibilities.']},
      {heading:'Keep values visible under pressure',body:['Verses such as 16.21 address harmful impulses including greed. In modern financial life, this might prompt you to question unrealistic guaranteed-return claims or decisions driven by fear of missing out.','This is a broad ethical analogy, not personalized investment guidance from scripture.']},
      {heading:'Turn worry into an informed next step',body:['Instead of deciding everything today, make a simple overview: essential monthly expenses, upcoming payments, resources available and questions you need answered. If debt or investments are involved, speak with an appropriately qualified adviser.','Small, accurate steps are more useful than treating a verse as a prediction about income.']}
    ],
    verses:[{chapter:2,verse:47,reason:'Responsible action amid uncertain results'},{chapter:16,verse:21,reason:'A warning about greed and harmful impulses'},{chapter:3,verse:19,reason:'Acting with discipline and without attachment'}],
    action:'Write down this month’s essential expenses and due dates, then identify one payment or financial question to clarify.',
    hinglish:'Paise ki tension hai aur business mein loss ho raha hai. Kya karu?',
    caution:'Not financial or investment advice. For loans, debt, taxes, investments or financial hardship, use verified information and seek qualified guidance.'
  },
  {
    slug:'bhagavad-gita-for-career-confusion',title:'Bhagavad Gita for Career Confusion and Job Decisions',
    description:'Read Bhagavad Gita verses on action, responsibility and discernment when considering a career change, job uncertainty or business decision.',
    eyebrow:'CAREER & CHOICES',
    intro:['Should you change jobs, start a business, study further or stay where you are? There is rarely one correct answer for everyone. Circumstances, finances, health, responsibilities and opportunity all matter.','Arjuna’s dialogue shows that moral and practical confusion deserves serious thought. UTTAR does not claim a Gita verse can decide your career for you.'],
    questions:['Should I leave my job to start a business?','How can I make a decision when I am afraid of regret?','What is the difference between effort and obsession with success?'],
    sections:[
      {heading:'Take action, but do your homework',body:['Gita 2.47 is often discussed in relation to doing one’s work without attachment to outcomes. A thoughtful modern application is to research a decision thoroughly while accepting that results cannot be guaranteed.','For a job switch, compare offer terms, learning opportunities, savings runway and responsibilities. Detachment is not an instruction to ignore evidence.']},
      {heading:'Be wary of borrowed expectations',body:['Gita 18.63 gives a notable place to reflection and choice after receiving teaching. This can invite a useful question: am I pursuing this path because it fits my circumstances and values, or only because others expect it?','The verse does not map directly onto present-day professions. Treat it as an invitation to think, not a divine verdict.']},
      {heading:'Try a reversible experiment',body:['When possible, test before making a major commitment. Speak to people working in the field, build a small portfolio, compare budgets or run a modest pilot.','Talking with a mentor, career counselor or qualified adviser can add evidence that a spiritual reflection alone cannot provide.']}
    ],
    verses:[{chapter:2,verse:47,reason:'Effort and uncertain outcomes'},{chapter:18,verse:63,reason:'Reflection and informed choice'},{chapter:3,verse:19,reason:'Responsible action'}],
    action:'Create a three-column comparison: stay, change, and test first. Record one concrete advantage, risk and next research step for each.',
    hinglish:'Naukri chhod kar business start karna chahiye ya nahi?'
  },
  {
    slug:'bhagavad-gita-for-anger',title:'Bhagavad Gita on Anger and Difficult Conversations',
    description:'Explore Bhagavad Gita teachings about anger, attention and thoughtful responses, with practical reflection and original verse references.',
    eyebrow:'ANGER & RELATIONSHIPS',
    intro:['Anger can signal hurt, injustice, fear or a crossed boundary. The goal is not to suppress every difficult feeling. It is to consider what the feeling is telling you and what response will protect your values and safety.','The Bhagavad Gita explores how emotions can shape judgment. That makes it a useful starting point for reflection—not a reason to tolerate mistreatment.'],
    questions:['What does the Gita say about anger?','How do I respond instead of reacting?','Can I set a boundary and still act with compassion?'],
    sections:[
      {heading:'When anger takes over attention',body:['Bhagavad Gita 2.62–2.63 describes a sequence in which fixation and anger can disturb judgment. The passage can encourage a pause before acting on the first impulse.','It should not be used to shame someone for feeling angry in an unfair or unsafe situation. The practical question is what response is proportionate and protective.']},
      {heading:'Compassion does not erase boundaries',body:['Gita 12.13 is often associated with non-hostility and compassion. A modern application is to disagree without cruelty while still naming unacceptable behavior.','If a relationship involves threats or violence, prioritize immediate safety and qualified human support rather than relying on a verse.']},
      {heading:'Prepare a calmer conversation',body:['Before sending a message, write down the facts, the impact on you and the specific boundary or request you want to communicate. Decide whether this is a safe conversation to have now.','Waiting before an impulsive response can be wise; remaining silent about harm is not always wise.']}
    ],
    verses:[{chapter:2,verse:62,reason:'How fixation can feed anger'},{chapter:2,verse:63,reason:'Anger and impaired judgment'},{chapter:12,verse:13,reason:'Compassion without hostility'}],
    action:'Draft a two-sentence message: one sentence naming the issue and one stating a clear, respectful request or boundary.',
    hinglish:'Mujhe bahut gussa aata hai, aur ghar mein jhagda hota hai.',
    caution:'If anger is connected to threats, abuse or violence, seek safety and trusted support first. Scripture is not a substitute for emergency help.'
  }
];

export const getGuidanceTopic=(slug:string)=>guidanceTopics.find(t=>t.slug===slug);
