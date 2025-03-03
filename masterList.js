// masterList.js
window.MASTER_LIST = {
  executive: {
    cabinet: [
      {
        name: "Department of Defense (Civilian side)",
        employees: 765000,
        notes: "Civilians under DoD: the tireless, often grumbling workhorses who keep the war machine chugging along.",
        consequence: "Without the civilian workforce in the DoD, administrative and logistical support would collapse, impairing defense operations, delaying procurement and maintenance, and increasing vulnerability to geopolitical threats.",
        image: "dod_civil.webp"
      },
      {
        name: "Veterans Affairs",
        employees: 411000,
        notes: "Overseeing VA hospitals and benefits for veterans—what did they ever do for us anyway?",
        consequence: "The loss of Veterans Affairs would leave millions of veterans without critical healthcare, mental health services, and disability benefits, leading to increased homelessness, deteriorating public health, and societal instability.",
        image: "veterans_affairs.webp"
      },
      {
        name: "Homeland Security",
        employees: 240000,
        notes: "From ICE to FEMA: guarding the gates, kicking out the unwanted, and cleaning up the messes left behind.",
        consequence: "Without Homeland Security, border control, emergency response, and counterterrorism efforts would weaken, leading to increased illegal immigration, slower disaster responses, and heightened vulnerability to terrorist threats.",
        image: "homeland_security.webp"
      },
      {
        name: "Justice",
        employees: 115000,
        notes: "FBI, DEA, ATF, and U.S. Marshals—enforcing the law, unless it's you or your colleagues, of course...",
        consequence: "A collapse in federal law enforcement services would spur a surge in organized crime, drug trafficking, and overall lawlessness, eroding public trust in government and compromising national safety.",
        image: "justice.webp"
      },
      {
        name: "Treasury",
        employees: 86000,
        notes: "IRS, Mint, and OCC: counting coins and dodging audits as if playing a high-stakes game of fiscal dodgeball.",
        consequence: "Without Treasury services, tax collection and financial oversight would disintegrate, triggering budget shortfalls, increasing national debt, and jeopardizing the funding of essential public services.",
        image: "treasury.webp"
      },
      {
        name: "Agriculture",
        employees: 100000,
        notes: "USDA and Forest Service—cultivating crops and climate theory hoaxes. Shut up and hand me that polar bear steak.",
        consequence: "The absence of USDA oversight would disrupt food safety and agricultural subsidies, potentially leading to food shortages, higher prices, and a destabilization of rural economies.",
        image: "agriculture.webp"
      },
      {
        name: "Health and Human Services",
        employees: 80000,
        notes: "NIH, CDC, and FDA—mixing cutting-edge science with bureaucratic misadventures, possibly mixing up some vials occasionally. It's not like we've had a recent worldwide pandemic or anything...",
        consequence: "Without HHS, public health initiatives would crumble, increasing the risk of uncontrolled disease outbreaks, reducing medical research, and limiting access to healthcare for millions.",
        image: "health_and_human.webp"
      },
      {
        name: "Interior",
        employees: 70000,
        notes: "NPS, BLM, FWS—manage the lands, protect the wildlife, and occasionally get lost in the woods. Permanent vacation, anyone?",
        consequence: "The loss of Interior services would lead to chaotic management of natural resources, accelerating environmental degradation, undermining conservation efforts, and exacerbating climate change impacts.",
        image: "interior.webp"
      },
      {
        name: "Social Security Administration",
        employees: 60000,
        notes: "You thought you'd retire someday? Think again. SSA: You can sleep when you're dead.",
        consequence: "Without the SSA, millions of retirees and disabled individuals would lose their income support, plunging them into poverty and causing widespread economic and social distress.",
        image: "social_security.webp"
      },
      {
        name: "Transportation",
        employees: 54000,
        notes: "FAA and FHWA—attempting to move people efficiently and safely, can ChatGPT handle air traffic control?",
        consequence: "A failure in Transportation services would undermine infrastructure management and safety oversight, resulting in increased accidents, inefficient transit systems, and severe disruptions to the economy.",
        image: "transportation.webp"
      },
      {
        name: "Commerce",
        employees: 43000,
        notes: "Census, NOAA, Patent Office—where commerce, data and innovation collide. The resulting crash looks great in slow motion.",
        consequence: "Without Commerce oversight, regulatory frameworks for trade and innovation would collapse, potentially leading to market monopolies, increased consumer fraud, and a slowdown in economic growth.",
        image: "commerce.webp"
      },
      {
        name: "State",
        employees: 26000,
        notes: "Diplomats and embassies—you thought you had immunity? Think again. State: How can we help you become an international incident today?",
        consequence: "The loss of State Department functions would severely impair international diplomacy, heightening the risk of global conflicts, reducing trade partnerships, and diminishing national influence abroad.",
        image: "state.webp"
      },
      {
        name: "Energy",
        employees: 15000,
        notes: "Labs and nuclear programs—sparking brilliant ideas and the occasional, unintended explosion.",
        consequence: "Without Energy oversight, nuclear safety and energy research would falter, leading to energy shortages, increased risk of nuclear accidents, and stalled advancements in renewable technologies.",
        image: "energy.webp"
      },
      {
        name: "Labor",
        employees: 15000,
        notes: "OSHA and Bureau of Labor Stats—bunch of bean counting safety freaks, making sure you don't lose a finger or two. As long as I have the middle one who cares?",
        consequence: "A loss of Labor oversight would erode workplace safety standards and labor rights, potentially resulting in increased industrial accidents, worker exploitation, and overall reduced quality of life.",
        image: "labor.webp"
      },
      {
        name: "Education",
        employees: 4000,
        notes: "Student aid and educational policies—you can't spell 'lost-generation' without 'education cuts.'",
        consequence: "Without Education services, funding and oversight for educational institutions would decline, leading to a less skilled workforce, reduced innovation, and long-term economic challenges.",
        image: "education.webp"
      },
      {
        name: "Housing and Urban Development (HUD)",
        employees: 8000,
        notes: "Why do the peasants need homes? They should be grateful for the cardboard boxes you throw out from your Prime deliveries. You'll have more to add to the pile in a couple days when your hair dye arrives.",
        consequence: "The collapse of HUD would result in a sharp rise in homelessness and housing insecurity, deepening urban poverty and widening the wealth gap.",
        image: "housing_and_urban.webp"
      }
    ],
    uniformed: [
      {
        name: "Army",
        employees: 473000,
        notes: "The ground force—battle-hardened, overworked, and ever ready with a grumble. Hopefully you won't need them anytime soon.",
        consequence: "Without the Army, ground defense capabilities would be critically weakened, exposing the nation to increased military threats and undermining both national and allied security.",
        image: "army.webp"
      },
      {
        name: "Navy",
        employees: 341000,
        notes: "Sailing the seas with disciplined precision—and maybe a few secret stashes of snacks.",
        consequence: "A loss of the Navy would cripple maritime defense, disrupt global trade routes, and diminish the nation's ability to project power and protect international interests.",
        image: "navy.webp"
      },
      {
        name: "Air Force",
        employees: 329000,
        notes: "You said jet fuel costs how much? Just sell them off to Russia, they'll take any old junk.",
        consequence: "Without the Air Force, air defense and strategic bombing capabilities would vanish, reducing national security and compromising rapid response to aerial threats.",
        image: "air_force.webp"
      },
      {
        name: "Marine Corps",
        employees: 177000,
        notes: "Semper Fi—brothers in arms, loyal to the end, even as you ordered them to walk the plank.",
        consequence: "The loss of the Marine Corps would remove a critical rapid-response force, severely impacting the nation's ability to conduct amphibious operations and crisis interventions.",
        image: "marine_corps.webp"
      },
      {
        name: "Space Force",
        employees: 8600,
        notes: "Didn't you create this one as a joke? Well, the joke's on them i guess.",
        consequence: "Without the Space Force, the nation's space defense and satellite operations would be compromised, affecting communications, navigation, and overall space security.",
        image: "space_force.webp"
      }
    ],
    independent: [
      {
        name: "NASA",
        employees: 18000,
        notes: "I have a friend who say's he can do this better, and for half* the price. I'm sure he's right.",
        consequence: "The absence of NASA would stall space exploration and scientific research, hindering technological innovation and reducing international collaboration in space.",
        image: "nasa.webp"
      },
      {
        name: "Environmental Protection Agency (EPA)",
        employees: 14000,
        notes: "This is the 21st century, who even needs an environment anymore. Not me, that's for sure. Drill baby drill!",
        consequence: "Without the EPA, environmental regulations would weaken significantly, leading to increased pollution, loss of biodiversity, and accelerating climate change impacts.",
        image: "epa.webp"
      },
      {
        name: "General Services Administration (GSA)",
        employees: 12000,
        notes: "You think we could outsource this to Amazon? They deliver everything else.",
        consequence: "The collapse of GSA would result in disorganized management of federal assets, causing inefficiencies in government operations and increased operational costs.",
        image: "gsa.webp"
      },
      {
        name: "Tennessee Valley Authority (TVA)",
        employees: 10000,
        notes: "Keeping regional lights on, quite literally. A Nation in the dark is a nation that can't see what you're up to.",
        consequence: "Without TVA, regional power grids could become unstable, leading to widespread blackouts, economic disruption, and jeopardized energy security.",
        image: "tva.webp"
      },
      {
        name: "Small Business Administration (SBA)",
        employees: 5000,
        notes: "Where will we get our small loans of $1 million now?",
        consequence: "The loss of SBA support would critically impact small businesses, stifling entrepreneurship, innovation, and potentially triggering higher unemployment rates.",
        image: "sba.webp"
      },
      {
        name: "Federal Deposit Insurance Corp. (FDIC)",
        employees: 6000,
        notes: "I'm quite sure the banks can look after themselves, they've done a great job so far. Just look at how much money they've made from everyone else's money. Like magic, maybe we should get them to run NASA.",
        consequence: "Without the FDIC, depositor confidence would collapse, potentially leading to bank runs, financial instability, and widespread economic crises.",
        image: "fdic.webp"
      },
      {
        name: "Securities and Exchange Commission (SEC)",
        employees: 4500,
        notes: "yeah.... these guys didn't stand a chance in hell of making it out of here in one piece. You and fraud are like two peas in an escape pod on the USS GetRichQuick.",
        consequence: "A breakdown in SEC oversight would increase financial market volatility, invite fraud, and erode investor confidence, risking economic collapse.",
        image: "sec.webp"
      },
      {
        name: "Smithsonian Institution",
        employees: 7000,
        notes: "You walked through the early-homosapien exhibit and got offended because you thought it was a wax museum of you and your Cabinet. You're not that old, are you?",
        consequence: "Without the Smithsonian, national cultural heritage and historical preservation would suffer, reducing public access to education and diminishing cultural identity.",
        image: "smithsonian.webp"
      },
      {
        name: "Nuclear Regulatory Commission (NRC)",
        employees: 2800,
        notes: "It glows, how cool is that. Maybe we should start incorporating it into our water supply. We can give the fish cool new sunglasses if they start to go blind. MAGA (Make Aquariums Glow Again).",
        consequence: "The absence of NRC oversight would increase the risk of nuclear accidents, radiation leaks, and long-term environmental contamination.",
        image: "nrc.webp"
      },
      {
        name: "National Archives & Records Admin (NARA)",
        employees: 2800,
        notes: "Burn all the records, shred all the documents. Who needs history when you can make it up as you go along?",
        consequence: "Without NARA, critical historical documents and records would be at risk of loss or mishandling, eroding national memory and accountability.",
        image: "nara.webp"
      },
      {
        name: "Office of Personnel Management (OPM)",
        employees: 3000,
        notes: "They said 'You need us to keep firing people', You said 'I have a magic button...'.",
        consequence: "Without OPM, federal personnel management would become chaotic, leading to inefficiencies in hiring, loss of experienced talent, and diminished government performance.",
        image: "opm.webp"
      },
      {
        name: "Equal Employment Opportunity Comm. (EEOC)",
        employees: 2000,
        notes: "We aren't employing anyone anymore, but we will guarantee that they are treated equally. Equally badly.",
        consequence: "The absence of the EEOC would result in unchecked workplace discrimination, reduced diversity and inclusion, and increased social and legal conflicts.",
        image: "eeoc.webp"
      },
      {
        name: "Federal Communications Commission (FCC)",
        employees: 1700,
        notes: "Well the FCC won't let you be, or let you be you so let you see. We'll shut them down so quick-ily and they will see how rapidly the mainstream media evolves into a propaganda machine. I know, the ending needs work.",
        consequence: "Without the FCC, media and telecommunications regulation would falter, potentially leading to monopolies, misinformation, and compromised communications infrastructure.",
        image: "fcc.webp"
      },
      {
        name: "National Science Foundation (NSF)",
        employees: 1400,
        notes: "They had all this time to give us flying cars, humanoid robots and people on Mars. Now that this is happening, they are out of here.",
        consequence: "Without NSF funding, scientific research and innovation would dramatically slow, undermining technological progress and economic competitiveness.",
        image: "nsf.webp"
      },
      {
        name: "Federal Trade Commission (FTC)",
        employees: 1100,
        notes: "You think we can make a new crypto with the initials FTC? We can call it 'F**k The Consumer' or 'Fraud Token Coin', I'm sure it will be a hit.",
        consequence: "The loss of FTC oversight would expose consumers to increased fraud, deceptive practices, and exploitation, reducing trust in the market.",
        image: "ftc.webp"
      },
      {
        name: "National Labor Relations Board (NLRB)",
        employees: 1200,
        notes: "The only kind of labor you want to hear about is the child kind. You know, the kind that makes your clothes.",
        consequence: "Without the NLRB, labor disputes could escalate unchecked, leading to increased strikes, reduced productivity, and potential economic instability.",
        image: "nlrb.webp"
      },
      {
        name: "National Credit Union Administration",
        employees: 1100,
        notes: "Aren't Credit Unions just banks for poor people? We don't need them anymore. Poor people don't have enough money to even pay taxes, why do they need a fancy box to keep it in?",
        consequence: "The absence of NCUA oversight could lead to the collapse of credit unions, jeopardizing financial security for millions and destabilizing local economies.",
        image: "ncua.webp"
      },
      {
        name: "Bureau of Consumer Financial Protection (CFPB)",
        employees: 1600,
        notes: "People don't need to protect their money, they should spend it. At one of your hotels, casinos, or golf courses.",
        consequence: "Without CFPB regulation, consumers would be more vulnerable to predatory lending and financial scams, resulting in significant personal financial losses.",
        image: "cfpb.webp"
      },
      {
        name: "US Agency for Global Media",
        employees: 1600,
        notes: "Why do you need to know what your international 'friends' are saying about you? You know you're the best, and that's all that matters.",
        consequence: "Without the US Agency for Global Media, reliable international news dissemination would suffer, leading to increased misinformation and diminished global awareness.",
        image: "us_agency.webp"
      },
      {
        name: "Other Defense – Civil Programs",
        employees: 1000,
        notes: "Whatever it was, it's gone now. I'm sure it wasn't important. One weak link in a chain has never been the cause of a disaster.",
        consequence: "The loss of these specialized defense programs would create critical gaps in military intelligence and logistics, undermining overall national security.",
        image: "other_defense.webp"
      },
      {
        name: "Int’l Assistance Programs",
        employees: 6400,
        notes: "Nothing says 'We are super wealthy and prosperous' like cutting off all international aid. It's like saying 'We have so much money, we couldn't possibly spend it all, so we wont even try.'",
        consequence: "Without these international assistance programs, U.S. foreign aid efforts would diminish, reducing global humanitarian support and weakening diplomatic ties.",
        image: "int_assistance.webp"
      },
      {
        name: "Commodity Futures Trading Commission (CFTC)",
        employees: 700,
        notes: "The only future you care about is swimming in a pool of Fire Points, gold bricks and the tears of your enemies.",
        consequence: "Without CFTC oversight, the derivatives market could spiral into high-risk speculation, increasing the likelihood of financial bubbles and subsequent crashes.",
        image: "cftc.webp"
      },
      {
        name: "Railroad Retirement Board (RRB)",
        employees: 800,
        notes: "All aboard the unemployment express! Next stop, the breadline.",
        consequence: "Without the RRB, railroad workers would lose critical retirement benefits, causing widespread economic hardship and impacting the transportation sector.",
        image: "rrb.webp"
      },
      {
        name: "Federal Maritime Commission (FMC)",
        employees: 125,
        notes: "So what if 70% of the world is covered in water? Fish pee in it, why even bother looking into it?",
        consequence: "The absence of FMC oversight would disrupt maritime trade regulations, increasing the risk of accidents, environmental hazards, and interruptions in global shipping.",
        image: "fmc.webp"
      },
      {
        name: "Federal Mediation & Conciliation Service",
        employees: 200,
        notes: "Sure you can unionize, it's easier to fire you all as a group, instead of having to do it one by one.",
        consequence: "Without mediation services, unresolved labor disputes could lead to prolonged strikes, reduced productivity, and heightened tensions between employers and employees.",
        image: "fmcs.webp"
      },
      {
        name: "Institute of Museum & Library Services",
        employees: 65,
        notes: "You already bought the best paintings, that one with the dogs and the playing cards is a classic. How do you improve on that? You don't.",
        consequence: "The loss of IMS funding would jeopardize the operation of museums and libraries, eroding cultural and educational resources in communities.",
        image: "ims.webp"
      },
      {
        name: "National Endowment for the Arts (NEA)",
        employees: 100,
        notes: "That whole broke, starving artist thing is essential to the process. You are the muse they never knew they needed.",
        consequence: "Without the NEA, arts programs would face significant cuts, reducing cultural enrichment and stifling creative expression across the nation.",
        image: "nea.webp"
      },
      {
        name: "National Endowment for the Humanities (NEH)",
        employees: 100,
        notes: "Who needs history, culture, and philosophy? History is written by the winners, on your social media platform of course.",
        consequence: "The absence of NEH support would diminish research and preservation of humanities, eroding cultural understanding and historical scholarship.",
        image: "neh.webp"
      },
      {
        name: "US Commission on Civil Rights",
        employees: 50,
        notes: "All men are created equal, but some are more equal than others. You are the most equal of them all.",
        consequence: "Without civil rights oversight, discriminatory practices could proliferate, undermining social justice and increasing inequality.",
        image: "usccr.webp"
      },
      {
        name: "Merit Systems Protection Board (MSPB)",
        employees: 200,
        notes: "If you get rid of these idiots, you can finally hire some other idiots (your kids) to do the job.",
        consequence: "The loss of MSPB functions would erode the integrity of federal hiring practices, leading to potential nepotism and reduced meritocracy in government employment.",
        image: "mspb.webp"
      },
      {
        name: "Office of Special Counsel (OSC)",
        employees: 120,
        notes: "The all new Office of Special Corruption has a nice ring to it, don't you think? You would easily be picked as the leader, no one else has as much experience.",
        consequence: "Without OSC oversight, governmental misconduct could go unchecked, leading to increased corruption and diminished accountability in federal agencies.",
        image: "osc.webp"
      },
      {
        name: "Peace Corps",
        employees: 6000,
        notes: "Bunch of do-gooders, helping others, building bridges, and all that nonsense. Burning bridges is much more fun.",
        consequence: "The absence of the Peace Corps would cut short critical international volunteer efforts, reducing cultural exchange and humanitarian aid in developing regions.",
        image: "peace_corps.webp"
      },
      {
        name: "Millennium Challenge Corporation",
        employees: 200,
        notes: "Stupid millennials and their challenges. They should be grateful they even have a TikTok still.",
        consequence: "Without MCC initiatives, U.S. development aid would sharply decline, undermining international development projects and straining diplomatic relationships.",
        image: "mcc.webp"
      },
      {
        name: "US International Development Finance Corp.",
        employees: 300,
        notes: "Remember how grateful those countries were when you helped them out? We didn't want their friendship anyway.",
        consequence: "Without this finance corp, investments in emerging markets would dry up, stifling economic growth and exacerbating poverty in developing regions.",
        image: "us_idfc.webp"
      },
      {
        name: "US Trade and Development Agency (USTDA)",
        employees: 50,
        notes: "Trade is for suckers, you have all the money you need. You can just give people money in exchange for the items you want... like trading, but with more steps.",
        consequence: "Without USTDA, key infrastructure projects abroad might lose funding, delaying modernization efforts and hindering international economic development.",
        image: "ustda.webp"
      },
      {
        name: "Board of Governors of the Federal Reserve",
        employees: 2800,
        notes: "These clowns... didn't you have them over at the yacht club last week?",
        consequence: "Losing the guidance of the Federal Reserve's Board would disrupt monetary policy, potentially triggering inflation, unemployment, and severe economic instability.",
        image: "gov_fed_reserve.webp"
      },
      {
        name: "Federal Reserve System (overall)",
        employees: 20000,
        notes: "Finally, you can get rid of the people who keep telling you 'no' to the new Billion Dollar bill. You are tired of small bills, you want to see your face on the biggest one.",
        consequence: "Without a coordinated Federal Reserve, the national and global financial systems would be thrown into chaos, leading to market crashes and prolonged economic downturns.",
        image: "fed_reserve.webp"
      },
      {
        name: "CIA",
        employees: 21500,
        notes: "I'm sure none of those spies you angered will swear revenge on you. You're a great guy, everyone loves you.",
        consequence: "Without the CIA, the nation’s intelligence capabilities would be severely compromised, leaving the country vulnerable to espionage and undetected foreign threats.",
        image: "cia.webp"
      },
      {
        name: "NSA",
        employees: 32000,
        notes: "Finally, you can stop sweeping for the bugs they keep planting in your office. You can watch all the episodes of 'The Apprentice' without having to suffer the embarrassment of anyone knowing about it.",
        consequence: "The absence of the NSA would result in a significant gap in signals intelligence, increasing the risk of cyber attacks and leaving national security exposed.",
        image: "nsa.webp"
      },
      {
        name: "DIA",
        employees: 16500,
        notes: "Our enemies are stupid. Why are we trying to gather intelligence from them. We should try finding a smarter enemy and steal some of theirs...",
        consequence: "Without DIA, military intelligence gathering would be impaired, compromising strategic defense planning and operational effectiveness.",
        image: "dia.webp"
      },
      {
        name: "National Geospatial-Intelligence Agency (NGA)",
        employees: 14500,
        notes: "The Earth is flat, and you are the center of it. Who needs maps?",
        consequence: "Without NGA, the nation would lose critical geospatial intelligence, affecting military operations, disaster response, and national security planning.",
        image: "nga.webp"
      },
      {
        name: "National Reconnaissance Office (NRO)",
        employees: 3000,
        notes: "Take that Google Earth. That's the last time they catch you laying naked in the rose garden.",
        consequence: "Without the NRO, the nation's ability to monitor global activities via satellites would be severely reduced, impairing strategic surveillance and reconnaissance.",
        image: "nro.webp"
      }
    ],
    postal: [
      {
        name: "US Postal Service (USPS)",
        employees: 516000,
        notes: "I'm not sure how people will get their pink slips now, but I'm sure they will get there eventually.",
        consequence: "The collapse of USPS would disrupt mail and package delivery nationwide, crippling communication, commerce, and essential services dependent on reliable postal operations.",
        image: "usps.webp"
      }
    ],
    whiteHouse: [
      {
        name: "The President",
        employees: 1,
        notes: "The Commander-in-Chief—oh, that's you. You're firing yourself, really? Is this your grand exit strategy? Unbelievable, yet oddly self-reflective.",
        consequence: "Removing the President would create a power vacuum, undermining executive leadership and triggering constitutional crises and political instability.",
        image: "president.webp"
      },
      {
        name: "Office of White House Counsel",
        employees: 40,
        notes: "The legal eagle—providing counsel and handling subpoenas until it’s time to part ways. A tough call, even if you can’t really fire a lawyer.",
        consequence: "Without the White House Counsel, top-level legal guidance would falter, potentially leading to unvetted policy decisions and increased vulnerability to legal challenges.",
        image: "white_house_counsel.webp"
      },
      {
        name: "Office of Digital Strategy",
        employees: 31,
        notes: "Steering the digital circus—managing online mayhem and averting the next Twitter/X debacle, until the curtain finally falls.",
        consequence: "Losing the digital strategy office would impair the administration's ability to manage cyber threats and public communication, increasing vulnerability to misinformation.",
        image: "digital_strategy.webp"
      },
      {
        name: "Office of Public Engagement",
        employees: 33,
        notes: "The public can engage with a poop emoji now. It's cheaper and more effectively expresses how you really feel about the people who voted for you.",
        consequence: "Without public engagement, communication between the government and its citizens would deteriorate, leading to widespread misinformation and decreased civic participation.",
        image: "public_engagement.webp"
      },
      {
        name: "Office of Legislative Affairs",
        employees: 40,
        notes: "Once adept at sweet-talking Congress, now dismissed as the charm wears thin. Who needs laws when you have executive orders?",
        consequence: "Without legislative affairs, coordination between the executive and legislative branches would break down, resulting in policy gridlock and ineffective governance.",
        image: "legislative_affairs.webp"
      },
      {
        name: "Office of the Staff Secretary",
        employees: 50,
        notes: "Drowning in memos and administrative overload—farewell to the endless paperwork, as the system finally cuts ties.",
        consequence: "The absence of the Staff Secretary would lead to communication breakdowns within the White House, delaying crucial decisions and disrupting administrative operations.",
        image: "staff_secretary.webp"
      },
      {
        name: "Office of Scheduling and Advance",
        employees: 2,
        notes: "Coordinating the chaos of schedules—now burned to a crisp, leaving no room for a family photo op.",
        consequence: "Without scheduling and advance coordination, the organization of White House events and meetings would become chaotic, impairing effective governance and international diplomacy.",
        image: "scheduling_advance.webp"
      },
      {
        name: "Office of Management and Administration",
        employees: 8,
        notes: "Day-to-day operations gone awry. Who will deliver your snacks and diet colas now? It's like living in a dystopian wasteland.",
        consequence: "The loss of management and administration support would paralyze the operational efficiency of the White House, resulting in disorganization and policy implementation failures.",
        image: "management_admin.webp"
      },
      {
        name: "Cabinet Secretaries",
        employees: 15,
        notes: "Some of your closest allies—now shown the door in a grand display of who's the boss and who gets to leave before it all comes crashing down.",
        consequence: "Eliminating Cabinet Secretaries would sever the critical link between the President and federal agencies, leading to disjointed policy execution and loss of strategic oversight.",
        image: "cabinet_secretaries.webp"
      },
      {
        name: "Office of the Chief of Staff",
        employees: 10,
        notes: "If theres no longer a staff, then who needs a chief? It's like a riddle, wrapped in a mystery, inside an enigma. Too difficult for you, so you just fired them.",
        consequence: "Without the Chief of Staff, internal operations within the White House would suffer, resulting in disorganization and inefficient leadership.",
        image: "chief_of_staff.webp"
      },
      {
        name: "Office of the National Security Advisor",
        employees: 20,
        notes: "If you have personal security, who needs national security? It's all about you, after all. The rest can fend for themselves.",
        consequence: "The absence of the National Security Advisor would severely impair national security planning and crisis response, leaving the nation exposed to threats.",
        image: "national_security.webp"
      },
      {
        name: "Domestic Policy Council",
        employees: 3,
        notes: "You and the First Lady are fine domestically. You never touch, you kiss from 8 feet apart, sleep in separate houses. It's like Romeo and Juliet, but with more sadness, death and needless tragedy.",
        consequence: "Without the Domestic Policy Council, coordinated domestic policymaking would falter, leading to ineffective social and economic programs and widespread public disillusionment.",
        image: "domestic_policy.webp"
      },
      {
        name: "National Economic Council",
        employees: 3,
        notes: "The only economic advice you need comes from that magic talking conch you keep in your desk drawer.",
        consequence: "The loss of the National Economic Council would result in a lack of strategic economic planning, risking fiscal mismanagement and destabilizing financial markets.",
        image: "national_economic_council.webp"
      },
      {
        name: "Office of Cabinet Affairs",
        employees: 1,
        notes: "You liked the sound of this one, til you realized it wasn't about your extra-marital activities. Now it's gone.",
        consequence: "Without the Office of Cabinet Affairs, interagency communication would suffer, causing policy inconsistencies and coordination failures across the government.",
        image: "cabinet_affairs.webp"
      },
      {
        name: "White House Office of Communications",
        employees: 5,
        notes: "You are the best, greatest, most fantastic communicator. You do words good. Why say lot word when few word do trick?",
        consequence: "Without White House Communications, the administration would struggle to manage public messaging and crisis communication, resulting in misinformation and erosion of public trust.",
        image: "communications.jpg"
      },
      {
        name: "Office of Intergovernmental Affairs",
        employees: 1,
        notes: "Just like the cabinets, you were disappointed. This didn't mean what you think it means. Not even close.",
        consequence: "Without intergovernmental affairs, coordination between federal, state, and local governments would break down, undermining collaborative responses to regional issues.",
        image: "intergovernmental.jpg"
      },
      {
        name: "Office of Presidential Personnel",
        employees: 2,
        notes: "You thought this was about hiring your friends. Turns out it's about firing them. Who knew?",
        consequence: "The loss of presidential personnel management would lead to disorganized staffing and potential favoritism, eroding the meritocratic foundation of government appointments.",
        image: "presidential_personnel.jpg"
      },
      {
        name: "White House Staff",
        employees: 500,
        notes: "You can finally walk around in your tighty-whities, no one to tell you to put on pants. It's a dream come true.",
        consequence: "Without the White House Staff, daily executive operations would be severely disrupted, hampering the President’s ability to communicate and govern effectively.",
        image: "white_house_staff.jpg"
      },
      {
        name: "Office of the First Lady",
        employees: 6,
        notes: "The First Lady’s office—now the President's newest ex-wife, now making a royal exit along with her entourage and HER children. You don't associate with losers.",
        consequence: "The removal of the First Lady’s office would eliminate an important channel for social advocacy and cultural diplomacy, weakening outreach and support for key social initiatives.",
        image: "first_lady.jpg"
      },
      {
        name: "The Vice President",
        employees: 1,
        notes: "You always hated this guy. He was always trying to be around you, talk with you, be your friend. Who needs friends when you have a magic button?",
        consequence: "Without the Vice President, the presidential line of succession would be critically compromised, creating uncertainty in leadership continuity during crises."
      },
      {
        name: "Ex-First Lady",
        employees: 1,
        notes: "Ex-First Lady—more than just a footnote, she’s the President’s first ex-wife, elevated to an 'extra' status with her own brand of scandal and flair.",
        consequence: "Losing this role would remove a unique perspective on past administrations, potentially diminishing historical accountability and insight in public discourse."
      },
      {
        name: "Ex-First Lady's Divorce Attorney",
        employees: 1,
        notes: "Ex-First Lady's Divorce Attorney—while not technically an employee you can fire, consider this a symbolic termination of old grievances and outdated legal ties.",
        consequence: "Without this legal advisory role, high-profile legal disputes might be mishandled, reducing oversight in cases that require specialized expertise."
      },
      {
        name: "Billionaire Asshole",
        employees: 1,
        notes: "Billionaire Asshole—the mastermind who built this entire system, proclaiming his own rules. Yes, it was all his idea, and his whims spare no one, not even himself.",
        consequence: "The removal of this controversial role might lead to a loss of unconventional crisis management skills, potentially affecting emergency private sector–government collaborations."
      },
      {
        name: "White House Fellows",
        employees: 1,
        notes: "White House Fellows—once a prestigious title, now stripped of honor and terminated in a final act of decisive dismissal.",
        consequence: "Without the White House Fellows program, emerging future leaders would lose a crucial training platform, reducing the pool of skilled public servants for future governance.",
        image: "white_house_fellows.jpg"
      },
      {
        name: "White House Military Office",
        employees: 1,
        notes: "Drop and give me twenty letters of resignation. The White House Military Office—now facing a strategic retreat from the front lines of executive power.",
        consequence: "Without the White House Military Office, coordination between the executive branch and the armed forces would deteriorate, compromising crisis response and military readiness.",
        image: "white_house_military.jpg"
      },
      {
        name: "Oval Office Operations",
        employees: 1,
        notes: "Oval Office Operations—where the gears of power turn, now grinding to a halt in a final act of executive disarray.",
        consequence: "The loss of Oval Office Operations would disrupt daily executive functions, leading to inefficiencies in decision-making and reduced effectiveness of presidential activities.",
        image: "oval_office_operations.jpg"
      }
    ]
  },
  legislative: {
    house: [
      {
        name: "House of Representatives",
        employees: 435,
        notes: "435 Representatives sitting in a Capitol Hall, 435 Representatives sitting in a Capitol Hall, take one down, fire them now, 434 Representatives sitting in a Capitol Hall.",
        consequence: "Without the House of Representatives, legislative processes would grind to a halt, leaving millions without representation and creating a constitutional crisis over the balance of power.",
        image: "house_of_representatives.jpg"
      }
    ],
    senate: [
      {
        name: "Senate",
        employees: 100,
        notes: "Clearly they were no match for sheer, unadulterated reckless abandon. Getting rid of this group is one of the final roadblocks to total control.",
        consequence: "The absence of the Senate would eliminate an essential check on executive power, destabilize legislative oversight, and undermine the balance of federal governance.",
        image: "senate.jpg"
      }
    ],
    congressional: [
      {
        name: "Congressional Staff",
        employees: 20000,
        notes: "They've avoided the limelight, kept the show running, and now must face the spotlight of spur-of-the-moment downsizing.",
        consequence: "Without congressional staff, the administrative backbone of legislative operations would collapse, severely hindering the drafting and implementation of laws.",
        image: "congressional_staff.jpg"
      },
      {
        name: "Congressional Budget Office (CBO)",
        employees: 260,
        notes: "Well they should be happy, we made the budget smaller.",
        consequence: "Without the CBO, policymakers would lack critical fiscal analysis, leading to misinformed budget decisions and increased risk of economic instability.",
        image: "cbo.jpg"
      },
      {
        name: "Government Accountability Office (GAO)",
        employees: 3000,
        notes: "Couldn't account for their own jobs, now they must face the ultimate audit.",
        consequence: "The loss of GAO oversight would lead to unchecked wasteful spending and increased corruption, undermining public trust in government expenditures.",
        image: "gao.jpg"
      },
      {
        name: "Library of Congress",
        employees: 3100,
        notes: "You've decided that the only good book is one with a topless girl and a bunny on the cover. The Library of Congress—now facing a final chapter in the saga of knowledge and power.",
        consequence: "Without the Library of Congress, vital historical records and cultural knowledge would be at risk, eroding educational resources and national heritage.",
        image: "library_of_congress.jpg"
      },
      {
        name: "Government Publishing Office (GPO)",
        employees: 1700,
        notes: "Your critics can't complain about misinformation if you stop giving out any at all.",
        consequence: "Without the GPO, the official dissemination of government information would be disrupted, reducing transparency and accountability.",
        image: "gpo.jpg"
      },
      {
        name: "Architect of the Capitol",
        employees: 2200,
        notes: "The Architect of the Capitol—building the foundation of democracy, now facing a structural collapse.",
        consequence: "The absence of the Architect of the Capitol would compromise the maintenance of the Capitol building, affecting the functionality and preservation of a key national symbol.",
        image: "architect_of_the_capitol.jpg"
      },
      {
        name: "U.S. Capitol Police",
        employees: 2300,
        notes: "Guardians of the Halls, Protectors of the Peace. Sick a right-wing mob on them when you throw your next tantrum.",
        consequence: "Without Capitol Police, the security of the legislative branch would be severely compromised, leaving lawmakers and the public vulnerable to threats.",
        image: "capitol_police.jpg"
      },
      {
        name: "U.S. Botanic Garden",
        employees: 70,
        notes: "Unless the plants can vote, they're out of here.",
        consequence: "The loss of the U.S. Botanic Garden would eliminate a unique cultural and environmental asset, reducing public access to green spaces and botanical education.",
        image: "botanic_garden.jpg"
      }
    ]
  },
  judicial: {
    supremeCourt: [
      {
        name: "Supreme Court Justices",
        employees: 9,
        notes: "You picked most of them. 'I brought you into this world, and I can take you out of it.'",
        consequence: "Without the Supreme Court, the ultimate judicial arbiter would be absent, leading to legal uncertainty, potential rights violations, and a collapse in judicial checks on government power."
      }
    ],
    judges: [
      {
        name: "All Other Federal Judges",
        employees: 1700,
        notes: "Right on down the line, the gavel falls on each one. 'You're fired, you're fired, you're fired.' No objections, no appeals.",
        consequence: "Without federal judges, the legal system would be overwhelmed by unresolved cases, delaying justice and eroding the rule of law."
      }
    ],
    courtsStaff: [
      {
        name: "U.S. Courts Staff",
        employees: 30000,
        notes: "The unsung heroes of the legal system, now facing a final verdict of termination.",
        consequence: "Without the support staff in the courts, administrative functions would break down, causing delays in legal proceedings and severely reducing judicial efficiency."
      }
    ]
  }
};
