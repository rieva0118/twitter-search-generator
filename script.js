document.addEventListener('DOMContentLoaded', () => {
    // フォームの要素をすべて取得
    const form = document.getElementById('search-form');
    const allWordsInput = document.getElementById('all-words');
    const exactPhraseInput = document.getElementById('exact-phrase');
    const anyWordsTextarea = document.getElementById('any-words');
    const noneWordsInput = document.getElementById('none-words');
    const hashtagsInput = document.getElementById('hashtags');
    const fromUserInput = document.getElementById('from-user');
    const toUserInput = document.getElementById('to-user');
    const mentionUserInput = document.getElementById('mention-user');
    const excludeUserInput = document.getElementById('exclude-user'); 
    const repliesFilter = document.getElementById('replies-filter');
    const linksFilter = document.getElementById('links-filter');
    const minRepliesInput = document.getElementById('min-replies');
    const minLikesInput = document.getElementById('min-likes');
    const minRetweetsInput = document.getElementById('min-retweets');
    const sinceDateInput = document.getElementById('since-date');
    const untilDateInput = document.getElementById('until-date');

    const generateBtn = document.getElementById('generateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resultTextarea = document.getElementById('result');

    // 「生成」ボタンの処理
    generateBtn.addEventListener('click', () => {
        const commandParts = [];

        // 1. キーワード
        const allWords = allWordsInput.value.trim();
        if (allWords) commandParts.push(allWords);

        const exactPhrase = exactPhraseInput.value.trim();
        if (exactPhrase) commandParts.push(`"${exactPhrase}"`);

        const anyWords = anyWordsTextarea.value.trim().split('\n').filter(w => w.trim()).map(w => w.trim()).join(' OR ');
        if (anyWords) commandParts.push(`(${anyWords})`);
        
        const noneWords = noneWordsInput.value.trim().split(/\s+/).filter(w => w.trim()).map(w => `-${w.trim()}`).join(' ');
        if (noneWords) commandParts.push(noneWords);

        const hashtags = hashtagsInput.value.trim().split(/\s+/).filter(w => w.trim()).map(w => w.startsWith('#') ? w.trim() : `#${w.trim()}`).join(' ');
        if (hashtags) commandParts.push(hashtags);

        // 2. アカウント
        const fromUser = fromUserInput.value.trim();
        if (fromUser) commandParts.push(`from:${fromUser.replace('@', '')}`);

        const toUser = toUserInput.value.trim();
        if (toUser) commandParts.push(`to:${toUser.replace('@', '')}`);
        
        const mentionUser = mentionUserInput.value.trim();
        if (mentionUser) commandParts.push(`@${mentionUser.replace('@', '')}`);
        
        const excludeUser = excludeUserInput.value.trim();
        if (excludeUser) commandParts.push(`-from:${excludeUser.replace('@', '')}`);

        // 3. フィルター
        const replyVal = repliesFilter.value;
        if (replyVal === 'only') commandParts.push('filter:replies');
        if (replyVal === 'exclude') commandParts.push('-filter:replies');

        const linkVal = linksFilter.value;
        if (linkVal === 'only') commandParts.push('filter:links');
        if (linkVal === 'exclude') commandParts.push('-filter:links');
        
        // 4. エンゲージメント
        const minReplies = minRepliesInput.value;
        if (minReplies > 0) commandParts.push(`min_replies:${minReplies}`);
        
        const minLikes = minLikesInput.value;
        if (minLikes > 0) commandParts.push(`min_faves:${minLikes}`);
        
        const minRetweets = minRetweetsInput.value;
        if (minRetweets > 0) commandParts.push(`min_retweets:${minRetweets}`);
        
        // 5. 日付
        const sinceDate = sinceDateInput.value;
        if (sinceDate) commandParts.push(`since:${sinceDate}`);
        
        const untilDate = untilDateInput.value;
        if (untilDate) commandParts.push(`until:${untilDate}`);

        // 最終的なコマンドを組み立てて表示
        resultTextarea.value = commandParts.join(' ');
    });
    
    // 「リセット」ボタンの処理
    resetBtn.addEventListener('click', () => {
        form.reset();
        resultTextarea.value = '';
    });

    // 「コピー」ボタンの処理
    copyBtn.addEventListener('click', () => {
        const command = resultTextarea.value;
        if (command) {
            navigator.clipboard.writeText(command).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'コピー完了!';
                copyBtn.style.backgroundColor = '#2a9c43';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '#42b72a';
                }, 2000);
            }).catch(err => {
                console.error('コピーに失敗しました', err);
                alert('コピーに失敗しました。');
            });
        }
    });
});
