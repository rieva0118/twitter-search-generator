body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #f0f2f5;
    color: #1c1e21;
    line-height: 1.6;
}

.container {
    background-color: #ffffff;
    padding: 1.5rem 2rem;
    margin: 2rem auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 800px;
}

h1 {
    font-size: 1.8rem;
    text-align: center;
    color: #1DA1F2; /* X Blue */
    margin-bottom: 0.5rem;
}

p {
    text-align: center;
    color: #606770;
    margin-bottom: 2rem;
}

fieldset {
    border: 1px solid #dddfe2;
    border-radius: 6px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
}

legend {
    font-size: 1.2rem;
    font-weight: bold;
    color: #1DA1F2;
    padding: 0 0.5em;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

/* 2列にまたがる要素 */
.form-group:has(textarea) {
    grid-column: 1 / -1;
}

label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
}

input[type="text"],
input[type="number"],
input[type="date"],
select,
textarea {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #dddfe2;
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box;
}

textarea {
    resize: vertical;
}

.output-section {
    margin-top: 2rem;
    position: relative;
}

.buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

button {
    flex-grow: 1;
    padding: 0.8rem 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
}

button:active {
    transform: scale(0.98);
}

button.primary {
    color: #ffffff;
    background-color: #1DA1F2;
}

button.primary:hover {
    background-color: #1a91da;
}

#resetBtn {
    background-color: #e4e6eb;
    color: #1c1e21;
}
#resetBtn:hover {
    background-color: #d8dbdf;
}


#copyBtn {
    position: absolute;
    top: 6.2rem; /* 位置を調整 */
    right: 10px;
    width: auto;
    flex-grow: 0;
    padding: 0.3rem 0.8rem;
    font-size: 0.9rem;
    background-color: #42b72a;
    color: white;
}

#copyBtn:hover {
    background-color: #36a420;
}
