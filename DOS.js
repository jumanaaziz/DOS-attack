const attack = async () => {
    while (true) {
        await fetch('http://localhost:3000/') 
            .catch(err => console.error('Request failed:', err));
    }
}
attack();
