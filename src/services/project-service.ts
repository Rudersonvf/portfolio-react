import axios from "axios";

export function findAll() {
    return axios.get("https://raw.githubusercontent.com/Rudersonvf/assets/main/portfolio_data.json")
}

export function findById(id: number) {
    return axios.get("https://raw.githubusercontent.com/Rudersonvf/assets/main/portfolio_data.json").then(response => {
        const projects = response.data.content;
        const project = projects.find((project: { id: number; }) => project.id === id);
        return project
    }) 
}