// types.d.ts (hoặc type.ts)

export interface SectionProps {
    title: string;
    description: string;
    imageUrl: string;
    reverse?: boolean;
}

export interface Project {
    title: string;
    description?: string;
    image: string;
}

export interface CardProps {
    project: Project;
    setSelectedProject: (project: Project) => void;
}

export interface CardPopUpProps {
    project: Project | null;
    onClose: () => void;
}
