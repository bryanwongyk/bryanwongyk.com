const breakpoints: number[] = [768, 1024, 1280, 1440];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default mq;
