import axios from "axios";

export function findProjects() {
    return axios.get("https://raw.githubusercontent.com/Rudersonvf/assets/main/portfolio_data.json")
}