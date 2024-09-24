function generateUID() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 11);
}

export default generateUID;