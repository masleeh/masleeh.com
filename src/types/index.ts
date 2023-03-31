export interface IHeader {
    headerRef: React.RefObject<HTMLHeadElement>
}

export interface IStack {
    stackRef: React.RefObject<HTMLDivElement>,
    goToProjects: Function
}

export interface IAbout {
    aboutRef: React.RefObject<HTMLDivElement>
}