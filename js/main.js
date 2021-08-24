function toggleTheme() {
    if(document.getElementById("untok_main").classList.contains("light")) {
        document.getElementById("untok_main").classList.remove("light");
    } else {
        document.getElementById("untok_main").classList.add("light");
    }
}