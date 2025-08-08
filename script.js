document.addEventListener('DOMContentLoaded', () => {
    // HTMLの要素を取得
    const keywordsTextarea = document.getElementById('keywords');
    const generateBtn = document.getElementById('generateBtn');
    const resultTextarea = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');

    // 「生成」ボタンがクリックされたときの処理
    generateBtn.addEventListener('click', () => {
        // テキストエリアからキーワードを取得
        const keywords = keywordsTextarea.value.trim();

        if (keywords === '') {
            resultTextarea.value = 'キーワードを入力してください。';
            return;
        }

        // 改行で区切って配列にし、空の行は無視する
        const keywordArray = keywords.split('\n').filter(word => word.trim() !== '');

        // 各キーワードをダブルクオーテーションで囲み、"OR"で連結
        const searchCommand = keywordArray.map(word => `"${word.trim()}"`).join(' OR ');

        // 結果を表示
        resultTextarea.value = searchCommand;
    });

    // 「コピー」ボタンがクリックされたときの処理
    copyBtn.addEventListener('click', () => {
        const command = resultTextarea.value;
        if (command && command !== 'キーワードを入力してください。') {
            // クリップボードにコピー
            navigator.clipboard.writeText(command).then(() => {
                // コピー成功時のフィードバック
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'コピー完了!';
                copyBtn.style.backgroundColor = '#2a9c43'; // 一時的に色を変更
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '#42b72a'; // 元の色に戻す
                }, 2000); // 2秒後に元に戻す
            }).catch(err => {
                console.error('コピーに失敗しました', err);
                alert('コピーに失敗しました。');
            });
        }
    });
});
