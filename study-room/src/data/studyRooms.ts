
export type StudyRoom = {
    id: string;
    title: string;
    topic: string;
    currentMembers: number;
    maxMembers: number;
    status: string;
};

export const studyRooms: StudyRoom[] = [
    {
        id: "ai-ml",
        title: "AI & Machine Learning",
        topic: "Neural Networks Revision",
        currentMembers: 12,
        maxMembers: 12,
        status: "Live",
    },
    {
        id: "data-structures",
        title: "Data Structures",
        topic: "Graph Algorithms Practice",
        currentMembers: 5,
        maxMembers: 10,
        status: "Open",
    },
    {
        id: "web-development",
        title: "Web Development",
        topic: "Next.js App Router Discussion",
        currentMembers: 7,
        maxMembers: 8,
        status: "Open",
    },
];