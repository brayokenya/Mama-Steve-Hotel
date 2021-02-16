createList() {
    fetch("http://localhost:3002/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.singledata)
    }).then(
        this.setState({
            singledata: {
                title: "",
                author: ""
            }
        })
    );
}