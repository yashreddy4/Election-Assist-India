const electionData = {
    timeline: [
        {
            title: "Announcement of Elections",
            description: "The Election Commission of India (ECI) announces the election schedule. The Model Code of Conduct (MCC) comes into effect immediately."
        },
        {
            title: "Notification",
            description: "The President (for Lok Sabha) or Governor (for State Assembly) issues the formal election notification, starting the nomination process."
        },
        {
            title: "Filing of Nominations",
            description: "Candidates file their nomination papers along with an affidavit declaring their criminal records, assets, liabilities, and educational qualifications."
        },
        {
            title: "Scrutiny of Nominations",
            description: "The Returning Officer checks the nomination papers. Invalid papers are rejected."
        },
        {
            title: "Withdrawal of Nominations",
            description: "Candidates can withdraw their names within a specified period if they choose not to contest."
        },
        {
            title: "Election Campaigning",
            description: "Political parties and candidates campaign to persuade voters. Campaigning stops 48 hours before polling ends."
        },
        {
            title: "Polling Day",
            description: "Voters cast their votes using Electronic Voting Machines (EVMs) and Voter Verifiable Paper Audit Trails (VVPATs) at designated polling booths."
        },
        {
            title: "Counting & Results",
            description: "Votes are counted under tight security, and the Returning Officer declares the results."
        }
    ],

    flashcards: [
        {
            term: "ECI",
            definition: "Election Commission of India. The autonomous constitutional authority responsible for administering election processes in India at national, state, and district levels."
        },
        {
            term: "EPIC",
            definition: "Electors Photo Identity Card. Also known as the Voter ID card, issued by the ECI to eligible voters."
        },
        {
            term: "EVM",
            definition: "Electronic Voting Machine. Used in India since 1999 to record votes electronically instead of using ballot papers."
        },
        {
            term: "VVPAT",
            definition: "Voter Verifiable Paper Audit Trail. A machine attached to the EVM that prints a paper slip showing the candidate voted for, allowing voters to verify their vote."
        },
        {
            term: "MCC",
            definition: "Model Code of Conduct. A set of guidelines issued by the ECI for the conduct of political parties and candidates during elections, mainly with respect to speeches, polling day, polling booths, portfolios, election manifestos, processions, and general conduct."
        },
        {
            term: "NOTA",
            definition: "None of the Above. A ballot option that allows voters to officially register a vote of rejection for all candidates contesting the election."
        },
        {
            term: "Returning Officer (RO)",
            definition: "An officer designated by the ECI who is responsible for the conduct of elections in a specific constituency."
        },
        {
            term: "Lok Sabha",
            definition: "The lower house of India's bicameral Parliament, with members directly elected by the citizens."
        }
    ],

    quiz: [
        {
            question: "Who is responsible for conducting Lok Sabha and State Assembly elections in India?",
            options: [
                "The Supreme Court of India",
                "The Election Commission of India (ECI)",
                "The Prime Minister's Office",
                "The President of India"
            ],
            correctIndex: 1,
            explanation: "The Election Commission of India (ECI) is the autonomous constitutional authority responsible for administering election processes in India."
        },
        {
            question: "What does VVPAT stand for?",
            options: [
                "Voter Verified Paper Audit Trail",
                "Voting Verification Process And Track",
                "Visual Voting Print Audit Trail",
                "Voter Validated Paper Audit Trail"
            ],
            correctIndex: 0,
            explanation: "VVPAT stands for Voter Verified Paper Audit Trail. It allows voters to verify that their vote was cast correctly on the EVM."
        },
        {
            question: "When does the Model Code of Conduct (MCC) come into effect?",
            options: [
                "When the first vote is cast",
                "One month before polling day",
                "Immediately upon the announcement of the election schedule by the ECI",
                "When candidates file their nominations"
            ],
            correctIndex: 2,
            explanation: "The MCC comes into effect immediately when the ECI announces the election schedule."
        },
        {
            question: "What is the minimum voting age in India?",
            options: [
                "16 years",
                "18 years",
                "21 years",
                "25 years"
            ],
            correctIndex: 1,
            explanation: "The minimum voting age in India was reduced from 21 to 18 years by the 61st Constitutional Amendment Act of 1988."
        },
        {
            question: "Which option allows a voter to reject all candidates in an election?",
            options: [
                "REJECT",
                "VETO",
                "BLANK",
                "NOTA"
            ],
            correctIndex: 3,
            explanation: "NOTA (None of the Above) is an option on the EVM that allows a voter to officially register a vote of rejection for all candidates."
        }
    ]
};
