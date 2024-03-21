function idGenerator() {
    return Math.random().toString(16).slice(2) + new Date().getTime().toString(16);
}

export default idGenerator;