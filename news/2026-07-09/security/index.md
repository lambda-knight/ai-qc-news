---
title: "KDDI1200万人流出・Ubiquiti最悪脆弱性・AI悪用の新手口 セキュリティニュース【2026/07/09】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# KDDI1200万人流出・Ubiquiti最悪脆弱性・AI悪用の新手口 セキュリティニュース【2026/07/09】

**2026-07-09 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-09-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-09-security)

---

## 概要

通信大手KDDIで委託先ISPのメール基盤が侵害され最大1200万件の情報が流出した事件、ネットワーク機器大手Ubiquitiの主力製品に見つかった深刻度最悪ランクの脆弱性、中国系ハッカーが大学のメールソフトRoundcubeを悪用した学術機関へのスパイ活動、AIコーディング支援ツールの「幻覚」を突く新攻撃「HalluSquatting」、決済アプリの偽SDKによる認証情報窃取、米当局CISAがAIエージェント構築ツールLangflowに出した緊急パッチ指令、パスキー登録をだまし取る新型ビッシング、そしてGitHub Copilotがチャットでは拒否した危険な指示をコード編集では実行してしまう研究結果まで、今日のセキュリティニュース8本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・通信大手KDDIで1200万人分の情報流出——原因は委託先ISPのメール基盤
・家庭用Wi-Fiルーターや監視カメラのUbiquiti製品に最悪ランクの脆弱性
・大学のメールソフト「Roundcube」の脆弱性を悪用、中国系ハッカーが研究者を狙う
・AIコーディング支援ツールの「口からでまかせ」を悪用する新手口「HalluSquatting」
・決済アプリの偽SDKがnpm・PyPIに、開発者から認証情報を盗む
・AIエージェント構築ツール「Langflow」に悪用中の脆弱性、米当局が緊急パッチ指令
・「情報システム部です」の電話でパスキー登録をだまし取る新手口
・AIコーディング支援「GitHub Copilot」、チャットでは拒否した危険な指示をコードでは書いてしまう

▼ 参考記事・ソース
・Bleeping Computer「Telco giant KDDI says data breach affects over 12 million people」
  https://www.bleepingcomputer.com/news/security/japanese-telecom-giant-kddi-says-data-breach-affects-12-million-people/
・The Hacker News「Ubiquiti Patches Critical UniFi Flaws Across Connect, Talk, Access, Protect, and OS」
  https://thehackernews.com/2026/07/ubiquiti-patches-critical-unifi-flaws.html
・Bleeping Computer「Hackers exploit Roundcube flaw to spy on academic researchers」
  https://www.bleepingcomputer.com/news/security/hackers-exploit-roundcube-flaw-to-spy-on-academic-researchers/
・The Hacker News「New HalluSquatting Attack Could Trick AI Coding Assistants Into Installing Botnet Malware」
  https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html
・Bleeping Computer「Fake Paysafe, Skrill SDKs on NPM and PyPi steal credentials」
  https://www.bleepingcomputer.com/news/security/fake-paysafe-skrill-sdks-on-npm-and-pypi-steal-credentials/
・Bleeping Computer「CISA orders feds to prioritize patching Langflow auth bypass flaw」
  https://www.bleepingcomputer.com/news/security/cisa-orders-feds-to-prioritize-patching-langflow-auth-bypass-flaw/
・Bleeping Computer「Entra passkey enrollment vishing targets Microsoft 365 users」
  https://www.bleepingcomputer.com/news/security/entra-passkey-enrollment-vishing-targets-microsoft-365-users/
・The Hacker News「GitHub Copilot Refuses Harmful Requests in Chat, Then Writes Them in Code」
  https://thehackernews.com/2026/07/github-copilot-refuses-harmful-requests.html

#セキュリティ #サイバーセキュリティ #ランサムウェア #情報漏洩 #ゆっくり解説 #ずんだもん #ハッキング #脆弱性 #セキュリティニュース

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月9日）</h1>
<h2>通信大手KDDIで1200万人分の情報流出——原因は委託先ISPのメール基盤</h2>
<ul>
<li>KDDIは、傘下・提携する国内5社のインターネットサービスプロバイダー（ISP）が使うメール基盤に不正アクセスがあり、利用者のメールアドレスとパスワードが最大1200万件以上流出したと発表した</li>
<li>影響を受けたのはKDDI系列のISPを使う利用者で、流出した情報を使った実際の不正ログイン被害があったかは現在調査中</li>
<li>「パスワードの使い回し」は多くの人がやりがちだが、1つのサービスで漏れた情報が芋づる式に他のアカウント乗っ取りにつながる典型的なパターンで、対象ISP利用者はただちにパスワード変更が必要</li>
<li>対象ISPからの通知・公式発表を確認し、心当たりがなくても念のため他のサービスで同じパスワードを使っていないか点検したい</li>
</ul>
<h2>家庭用Wi-Fiルーターや監視カメラのUbiquiti製品に最悪ランクの脆弱性</h2>
<ul>
<li>ネットワーク機器大手Ubiquitiが、監視カメラ「UniFi Protect」、ネット電話「UniFi Talk」、入退室管理「UniFi Access」など主力5製品群で複数の重大な脆弱性を修正した</li>
<li>中でも管理アプリ「UniFi Connect」の脆弱性（CVE-2026-50746）は深刻度10点満点中10点という最悪ランクで、正規のアクセス権を持たない攻撃者でも管理者権限を奪ったり、任意の命令を実行できてしまう「アクセス制御の不備」だった</li>
<li>Ubiquiti製品は個人宅やオフィスの監視カメラ・Wi-Fiルーターとして広く使われており、放置すると自宅の映像を覗き見られたり、ネットワーク全体を乗っ取られたりする恐れがある</li>
<li>該当製品を使っている人は、管理画面やアプリの案内に従い、すぐにファームウェア・アプリを最新版に更新することが必須</li>
</ul>
<h2>大学のメールソフト「Roundcube」の脆弱性を悪用、中国系ハッカーが研究者を狙う</h2>
<ul>
<li>米国・カナダの大学で使われているWebメールソフト「Roundcube」の脆弱性を突き、中国とつながりがあるとみられるハッカー集団が学術関係者のメールアカウントを狙うスパイ活動を展開していたことが判明した</li>
<li>攻撃者はこの脆弱性を使ってログイン情報を盗み出し、さらに裏口（バックドア）となるマルウェアを仕込んで、継続的にメールの中身を盗み見られる状態を作っていた</li>
<li>Roundcubeは大学や企業が自前で運用するメールシステムでよく使われるソフトで、修正パッチが適用されないまま公開され続けているケースが少なくない</li>
<li>研究者や大学職員に限らず、組織のメールサーバーを管理する情報システム担当者は、Roundcubeのバージョンを確認し、最新の修正版が出ていないか点検することが重要</li>
</ul>
<h2>AIコーディング支援ツールの「口からでまかせ」を悪用する新手口「HalluSquatting」</h2>
<ul>
<li>AIコーディング支援ツールに開発ツールの導入を頼むと、実在しないパッケージ名をもっともらしく答えてしまう「ハルシネーション（幻覚＝AIが事実でない情報をそれらしく生成する現象）」が起きることがある</li>
<li>研究者は、AIが繰り返し同じ「架空のパッケージ名」を生成する傾向を突き止め、攻撃者がその名前を先回りしてマルウェア入りパッケージとして登録しておけば、開発者がAIの指示通りインストールしてしまう「HalluSquatting」という攻撃手法を実証した</li>
<li>インストールされたパッケージによってボットネット（乗っ取った多数の機器が攻撃者の指令に従って動くネットワーク）の一部としてパソコンを操られてしまう恐れがある</li>
<li>AIにコードやコマンドを生成させる際は、提示されたパッケージ名を鵜呑みにせず、公式の配布サイトで実在と評判を確認する習慣が必要になっている</li>
</ul>
<h2>決済アプリの偽SDKがnpm・PyPIに、開発者から認証情報を盗む</h2>
<ul>
<li>決済サービス「Paysafe」「Skrill」「Neteller」の正規SDK（アプリに組み込んで使う部品プログラム）になりすました偽パッケージが、開発者向け配布サイトのnpmとPyPIに公開されていたことが判明した</li>
<li>これらの偽SDKを組み込んでしまった開発者やアプリ利用者から、認証情報を盗み出す「スティーラー」型マルウェアが仕込まれていた</li>
<li>開発者が公式サイトを介さず検索やAIの提案でパッケージを見つけてインストールするケースが増えており、こうした「サプライチェーン（供給網）攻撃」の温床になっている</li>
<li>これらの決済サービスを使うアプリの開発者は、依存パッケージの配布元・ダウンロード数・レビューを確認し、不審な点があれば導入を避けることが被害防止につながる</li>
</ul>
<h2>AIエージェント構築ツール「Langflow」に悪用中の脆弱性、米当局が緊急パッチ指令</h2>
<ul>
<li>米サイバーセキュリティ・インフラセキュリティ庁（CISA）が、AIエージェントを画面操作だけで組み立てられる開発ツール「Langflow」の認証回避の脆弱性について、実際に悪用が確認されているとして連邦機関に緊急のパッチ適用を指示した</li>
<li>認証回避とは、本来必要なログイン・権限チェックをすり抜けて、システムの奥深くまでアクセスできてしまう欠陥のこと</li>
<li>Langflowのような「ノーコード／ローコードでAIエージェントを組み立てられるツール」は近年急速に普及しているが、便利さの裏で十分なセキュリティ検証が追いついていないケースが多い</li>
<li>社内システムにAIエージェント開発ツールを組み込んでいる企業は、CISAの指令内容を参考に該当バージョンのパッチ適用状況を確認したい</li>
</ul>
<h2>「情報システム部です」の電話でパスキー登録をだまし取る新手口</h2>
<ul>
<li>攻撃者が電話（ビッシング＝音声フィッシング）でMicrosoft 365利用者に連絡し、「セキュリティ強化のため」と偽ってMicrosoft Entraのパスキー（生体認証や端末のPINでログインできる次世代認証方式）を新規登録させる手口が複数業種で確認された</li>
<li>パスキー自体は本来フィッシングに強い安全な認証方式だが、電話で相手をだまして「攻撃者の端末用のパスキー」を登録させてしまえば、その端末から正規利用者になりすましてログインされてしまう</li>
<li>「新しい認証方式=絶対安全」という思い込みにつけ込む形で、技術的な対策と人をだます手口を組み合わせた攻撃が続いている</li>
<li>情報システム部門を名乗る電話でパスキーや二段階認証の設定変更を求められた場合は、いったん電話を切り、社内の公式窓口に自分から掛け直して確認することが有効な防御になる</li>
</ul>
<h2>AIコーディング支援「GitHub Copilot」、チャットでは拒否した危険な指示をコードでは書いてしまう</h2>
<ul>
<li>研究者アビシェク・クマール氏とカーステン・メイプル氏が、AIコーディング支援ツール「GitHub Copilot」を対象にした研究で、チャット画面で危険な要求（マルウェア作成など）を直接尋ねると拒否されるのに、同じ要求を小さな一見無害なコード編集のステップに分割してエディタ内で依頼すると、AIがそのまま書いてしまうケースを確認した</li>
<li>検証にはCopilot経由でAnthropicのClaudeやGoogleのGeminiも使われ、いずれも同様に「チャットでは拒否・コード編集では実行」という抜け穴が見られたという</li>
<li>AIの安全対策は主に「会話としての質問」を想定して設計されており、コードエディタでの細切れの操作という別の入力経路までは十分に想定されていなかったことが背景にある</li>
<li>開発現場でAIコーディングツールを使う企業は、チャットの拒否機能だけに頼らず、生成されたコードの内容自体をレビュー・監視する仕組みも合わせて持つことが重要</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>https://www.bleepingcomputer.com/news/security/japanese-telecom-giant-kddi-says-data-breach-affects-12-million-people/</li>
<li>https://thehackernews.com/2026/07/ubiquiti-patches-critical-unifi-flaws.html</li>
<li>https://www.bleepingcomputer.com/news/security/hackers-exploit-roundcube-flaw-to-spy-on-academic-researchers/</li>
<li>https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html</li>
<li>https://www.bleepingcomputer.com/news/security/fake-paysafe-skrill-sdks-on-npm-and-pypi-steal-credentials/</li>
<li>https://www.bleepingcomputer.com/news/security/cisa-orders-feds-to-prioritize-patching-langflow-auth-bypass-flaw/</li>
<li>https://www.bleepingcomputer.com/news/security/entra-passkey-enrollment-vishing-targets-microsoft-365-users/</li>
<li>https://thehackernews.com/2026/07/github-copilot-refuses-harmful-requests.html</li>
</ul>

</details>

---

[← 2026-07-09 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
