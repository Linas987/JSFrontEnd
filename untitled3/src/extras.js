//import React from "react";
function logout() {
    localStorage.clear();
    window.location.href = '/';
}

export default logout;
