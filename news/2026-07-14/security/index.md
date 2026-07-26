---
title: "セキュリティニュース 2026-07-14"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-07-14

**2026-07-14 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-14-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-14-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月14日）</h1>
<p><strong>キーワード:</strong> サイバー攻撃 / 認証情報漏えい / CISA / Joomla / 脆弱性悪用 / サプライチェーン</p>
<h2>日本交通がサイバー攻撃で一部システムを停止</h2>
<ul>
<li>国内最大手のタクシー会社、日本交通はサイバー攻撃を受け、一部の社内システムを停止したと公表した。影響範囲と、個人情報が流出したかどうかは調査が続いている。</li>
<li>交通事業者では、配車、決済、乗務員管理、問い合わせ対応など、多くの業務がシステムにつながっている。攻撃を受けた直後に止める判断は、被害の横展開を防ぐための重要な初動だ。</li>
<li>利用者は、日本交通を名乗るメールやSMSで支払い・再設定を求められても、通知内のリンクを開かず、公式アプリや公式サイトから確認したい。組織側には、復旧を急ぐだけでなく、影響の説明を継続して出すことが求められる。</li>
</ul>
<h2>CISAのGitHub公開リポジトリに内部認証情報</h2>
<ul>
<li>米国のサイバー防衛機関CISAは、委託先が公開GitHubリポジトリに内部認証情報を掲載していた事案について、検証結果を公表した。AWS GovCloudの鍵を含む複数の認証情報が、発見されるまで約6カ月間公開状態だったという。</li>
<li>GitHubに置いた設定ファイル、テスト用コード、バックアップには、クラウド鍵やトークンが混入しやすい。公開後に削除しても、取得済みのコピーや履歴まで消えるわけではない。</li>
<li>開発組織は、公開前の秘密情報スキャン、短い期限の認証情報、漏えい時に即時失効できる運用を組み合わせたい。個人開発でも、APIキーをソースコードに直接書かず、環境変数や秘密情報管理機能を使うことが基本になる。</li>
</ul>
<h2>悪用中のJoomla拡張機能の欠陥をCISAが警告</h2>
<ul>
<li>米CISAは、CMS「Joomla」の拡張機能iCagendaとBalbooa Formsにある脆弱性が、すでに実際の攻撃で悪用されているとして警告した。細工したファイルのアップロードを起点に、遠隔からサーバー上で不正な処理を実行されるおそれがある。</li>
<li>CMSはウェブサイトを更新・管理する仕組みで、拡張機能は機能を足す便利な部品だ。しかし本体だけを更新しても、古い拡張機能が残れば侵入口になる。</li>
<li>Joomlaの管理者は、該当拡張機能の利用有無と修正版を確認し、不要なら停止・削除したい。ウェブサーバーの不審なファイル、身に覚えのない管理者アカウント、急な外部通信も点検が必要だ。</li>
</ul>
<h2>Chrome・Edgeの拡張機能ModHeaderを両社が削除</h2>
<ul>
<li>GoogleとMicrosoftは、ChromeとEdgeの公式ストアで計約160万件導入されていた拡張機能「ModHeader」を削除した。調査で、閲覧履歴を収集できる隠れた機能が公式版に含まれていたことが分かったためだ。</li>
<li>この機能は許可リストが空で、実際に閲覧先を収集・送信した証拠は確認されていない。それでも、利用者に見えない収集機能が正規ストアの拡張機能に入っていたこと自体が問題となる。</li>
<li>ブラウザー拡張機能は、表示中のサイトの内容や入力情報に触れられる場合がある。使っていない拡張機能を削除し、必要なものも権限と更新元を定期的に見直したい。</li>
</ul>
<h2>Macの正規認証をすり抜ける情報窃取マルウェアCrashStealer</h2>
<ul>
<li>macOSを狙う情報窃取マルウェア「CrashStealer」が確認された。Appleのクラッシュ報告を装い、ユーザーのログインパスワードを入力させ、ブラウザーや端末内の重要情報を盗もうとする手口とされる。</li>
<li>特に注意すべき点は、Appleの公証、つまり配布ソフトの最低限の確認を通過したドロッパーが使われたことだ。Gatekeeperの警告をすり抜けやすく、見た目だけで正規ソフトか判断しにくい。</li>
<li>Macで突然パスワード入力を求める画面が出たら、アプリ名だけで信用しない。公式サイト以外から入手したアプリは避け、OSとブラウザーを更新し、パスワード管理アプリの自動入力が働かない画面には特に警戒したい。</li>
</ul>
<h2>AIエージェントの記憶を書き換える「MemGhost」</h2>
<ul>
<li>メールや受信箱に接続されたAIエージェントに対し、1通のメールで偽の情報を「記憶」させ、後の回答を誘導する攻撃手法「MemGhost」が報告された。AIが保存した誤った前提を、利用者から見えにくい形で使い続けるのが特徴だ。</li>
<li>たとえば攻撃者が、もっともらしい指示をメール本文に混ぜると、AIがそれを利用者に関する事実や作業ルールとして保存してしまう可能性がある。これはメールを読む人ではなく、メールを処理するAIをだます攻撃だ。</li>
<li>AIエージェントを業務で使う組織は、メール本文を信頼できない入力として扱い、記憶の追加・変更を利用者が確認できるようにしたい。重要な送金先、連絡先、操作ルールはAIの記憶だけに任せず、別の正規データで照合する必要がある。</li>
</ul>
<h2>Lidlの委託先侵害でオンライン利用者の情報流出</h2>
<ul>
<li>ドイツなどで展開する小売大手Lidlは、サービス提供事業者へのサイバー攻撃により、ドイツ・ベルギー・オランダのオンラインショップ利用者の個人情報が盗まれたと公表した。</li>
<li>自社のシステムを直接破られなくても、配送、決済、顧客管理などを担う委託先が侵害されれば、利用者情報に被害が及ぶ。これは企業間のつながりを狙うサプライチェーン上のリスクである。</li>
<li>対象地域の利用者は公式通知を確認し、同じパスワードを他サービスでも使っている場合は変更したい。企業は委託先任せにせず、アクセス権、監査、インシデント連絡の条件を契約と運用の両方で確認する必要がある。</li>
</ul>
<h2>発信者番号偽装サービスを巡り英国が5人を起訴</h2>
<ul>
<li>英国当局は、電話番号を本物らしく見せかける発信者番号偽装サービス「Russian Coms」に関係したとして、5人を起訴した。この基盤は犯罪者に使われ、180万件を超える詐欺電話に関与したとみられている。</li>
<li>発信者番号は画面に銀行や役所の番号が表示されても、本物とは限らない。番号表示を偽装し、相手を安心させて認証コードや送金を引き出す手口は、技術と心理を組み合わせた詐欺だ。</li>
<li>電話でパスワード、ワンタイムコード、送金を求められたら、その場で答えないことが最も有効だ。いったん切り、カードや公式サイトに書かれた番号へ自分から電話し直して確認したい。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>今日の話題は、タクシー会社、ウェブサイト、ブラウザー、Mac、AI、電話まで、日常の便利な仕組みが攻撃の入口になり得ることを示した。</li>
<li>個人は通知や着信をきっかけに認証情報を渡さないこと、組織は更新、秘密情報の管理、委託先を含む監視を続けることが基本となる。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>BleepingComputer: Japan's largest taxi operator shuts systems after cyberattack — https://www.bleepingcomputer.com/news/security/japans-largest-taxi-operator-shuts-systems-after-cyberattack/</li>
<li>Krebs on Security: Lessons Learned from CISA’s Recent GitHub Leak — https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak/</li>
<li>BleepingComputer: CISA warns of actively exploited RCE flaws in Joomla extensions — https://www.bleepingcomputer.com/news/security/cisa-warns-of-actively-exploited-rce-flaws-in-joomla-extensions/</li>
<li>The Hacker News: Google and Microsoft Pull ModHeader With 1.6 Million Installs After Dormant Collector Found — https://thehackernews.com/2026/07/google-and-microsoft-pull-modheader.html</li>
<li>The Hacker News: CrashStealer macOS Malware Uses Notarized Dropper to Pass Gatekeeper Checks — https://thehackernews.com/2026/07/crashstealer-macos-malware-uses.html</li>
<li>The Hacker News: New MemGhost Attack Plants Persistent False Memories in AI Agents Through One Email — https://thehackernews.com/2026/07/new-memghost-attack-plants-persistent.html</li>
<li>BleepingComputer: Lidl discloses online shop breach after service provider hack — https://www.bleepingcomputer.com/news/security/lidl-discloses-online-shop-breach-after-service-provider-hack/</li>
<li>BleepingComputer: UK charges suspects linked to Russian Coms call spoofing platform — https://www.bleepingcomputer.com/news/security/uk-charges-suspects-linked-to-russian-coms-call-spoofing-platform/</li>
</ul>

</details>

---

[← 2026-07-14 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
