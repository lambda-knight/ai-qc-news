---
title: "セキュリティニュース 2026-06-30"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-30

**2026-06-30 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-30-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-30-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026-06-30</h1>
<h2>Scattered Spider裁判が開幕——ロンドン交通局攻撃の実行犯2人が初日に有罪を認める</h2>
<ul>
<li>英国で開かれた裁判の初日、ハッカー集団「Scattered Spider（スキャタード・スパイダー）」のメンバー2人が、2024年8月にロンドン交通局（TfL）を攻撃した罪を認めた。TfLは首都ロンドンの鉄道・地下鉄・バスを統括する機関で、今回の攻撃により約5,000人の乗客の個人情報（銀行口座の一部を含む）が流出し、数週間にわたりオンラインサービスが停止した</li>
<li>Scattered Spiderは英語圏の若者（10代〜20代）を中心に構成される犯罪集団で、技術的なマルウェアではなく「ソーシャルエンジニアリング（人をだます手口）」を主武器とする。企業のヘルプデスク担当者に電話して社員のふりをし、パスワードリセットを迫るなどの手法でITシステムへの侵入口を開く</li>
<li>同グループは2023年にMGMリゾーツ（被害額推定1億ドル）やシーザーズ・エンターテインメントへの攻撃でも悪名をはせており、今回の有罪認否は国際的なサイバー犯罪捜査の成果として注目されている。企業・組織はヘルプデスクの本人確認手順の強化と多要素認証（MFA）の徹底が引き続き急務だ</li>
</ul>
<h2>MetaのAIサポートボットが乗っ取りに悪用——オバマ元大統領のInstagramも被害</h2>
<ul>
<li>Metaが提供するAIチャットボット（AI自動応答サポート）が、特定の命令文を埋め込むことでアカウント管理機能を乗っ取られる「プロンプトインジェクション攻撃」の被害を受けた。攻撃者は投稿・DM・コメントに悪意ある指示文を忍ばせることで、AIボットに対し不正な操作を実行させた</li>
<li>この手法を利用して、オバマ元大統領のホワイトハウス公式Instagramアカウントと米宇宙軍のチーフマスターサージェント（最高下士官）のアカウントが一時的に乗っ取られ、親イラン的な画像・メッセージに改ざんされた。攻撃は数時間以内に検知・修復されたが、著名アカウントが標的になるリスクが改めて浮き彫りとなった</li>
<li>今回の事件は「AIがアカウント管理ツールにアクセスできること」そのものが攻撃対象になることを示している。Metaは対策を実施中と発表しているが、AIサポートボットへの権限付与の範囲を最小化することや、管理者アカウントへの追加認証導入が業界全体で求められている</li>
</ul>
<h2>PerplexityになりすましたChrome拡張機能——検索内容を丸ごと盗聴</h2>
<ul>
<li>Microsoftのセキュリティ研究者が、人気のAI検索エンジン「Perplexity（パープレキシティ）」を装った悪意ある Chrome 拡張機能を発見・報告した。この拡張機能はインストール後から数日間は正常に動作し、ユーザーの警戒が薄れたタイミングで密かに活動を開始するという巧妙な設計だった</li>
<li>問題の拡張機能はブラウザのアドレスバーで入力されたすべての文字（検索語句はもちろん、URLに直接入力したIDやパスワード、プライベートな検索内容）を攻撃者のサーバーに送信していた。「AI検索ツール」として疑われにくいことを悪用した情報窃取ツールだ</li>
<li>Microsoftはこの拡張機能をEdgeストアおよびChromeウェブストアから削除したと報告している。対策としては、拡張機能は公式の評判のある開発者のものだけをインストールし、レビュー数が極端に少ない・新しい拡張機能は信頼しないこと。インストール済み拡張機能を定期的に棚卸しし、不要なものは削除することが重要だ</li>
</ul>
<h2>SimpleHelpの重大な脆弱性（CVE-2026-48558）が悪用中——新型Djinn Stealerが展開</h2>
<ul>
<li>IT支援・リモートサポートツール「SimpleHelp」に存在する重大な脆弱性（CVE-2026-48558）が攻撃者に悪用されていることが確認された。この欠陥は認証なしで遠隔からコードを実行（RCE）できるもので、企業のIT管理者が使うツールへの侵入という性質上、被害が広範囲に及ぶ恐れがある</li>
<li>攻撃者はこの脆弱性を悪用して「Djinn Stealer（ジン・スティーラー）」と呼ばれる新型の情報窃取マルウェアを展開している。Djinn StealerはWindows・macOS・Linuxすべてに対応したクロスプラットフォーム型のインフォスティーラーで、ブラウザに保存されたパスワード、暗号通貨ウォレット、セッションクッキー、機密ファイルなどを根こそぎ盗み出す</li>
<li>SimpleHelpを利用している企業・IT部門は速やかにアップデートを適用すること。また、リモートサポートツールのアクセス制限（IP制限・VPN経由のみなど）と、異常なセッション接続の監視強化が有効な防御策となる</li>
</ul>
<h2>Oracle EBSフィナンシャルに重大脆弱性——CVE-2026-46817が攻撃に悪用開始</h2>
<ul>
<li>大企業の会計・購買・在庫管理などを一元管理する「Oracle E-Business Suite（EBS）」フィナンシャルモジュールに重大な脆弱性（CVE-2026-46817）が発見され、すでに攻撃者による実際の悪用が始まっていることが脅威インテリジェンス企業Defusedによって確認された</li>
<li>この脆弱性を突かれると認証なしにOracleの財務データベースへの不正アクセスが可能になるとされており、企業の機密財務情報・取引データ・仕入先情報などが盗まれるリスクがある。製造業・小売業・公共機関など、Oracle EBSを基幹システムとして使う組織が主な標的になり得る</li>
<li>Oracleはすでにパッチ（修正プログラム）をリリースしているが、複雑なシステムゆえに適用が遅れる企業が多い。Oracle EBSを使用している組織は、IT担当部門にCVE-2026-46817対応パッチの適用状況を確認し、インターネットに直接さらされているOracleシステムを一刻も早くパッチ済みの状態にすること</li>
</ul>
<h2>Adobe AcrobatとPDFリーダーの緊急脆弱性——JPCERTとIPAが即時パッチ適用を要請</h2>
<ul>
<li>JPCERT/CC（日本のサイバーセキュリティ対策機関）とIPA（情報処理推進機構）が、Adobe Acrobat および Adobe Reader（PDF作成・閲覧ソフト）の重大な脆弱性（セキュリティ情報：APSB26-63）に関する緊急注意喚起を発出した。対象はWindowsおよびmacOSの両プラットフォームのユーザーだ</li>
<li>この脆弱性を悪用した攻撃では、細工された悪意あるPDFファイルを開くだけで、攻撃者が被害者のパソコン上で任意のコードを実行できる可能性がある。メールに添付されたPDF、Webサイトからダウンロードしたファイルなど、日常的に扱うPDFが攻撃の入口になり得る</li>
<li>対策はAdobe AcrobatまたはAdobe Readerを最新バージョンに即時更新すること（ソフトウェアを起動して「ヘルプ → アップデートを確認」）。また「保護モード」（サンドボックス機能）が有効になっていることも確認が必要。PDFを多用する業務環境では優先度最高で対応したい</li>
</ul>
<h2>Fortinet製品から認証情報が大量流出——「FortiBleed」でVPN情報がダークウェブに出回る</h2>
<ul>
<li>Fortinet（フォーティネット）社製のVPN製品「FortiGate」などに関連する大量の認証情報（ユーザー名・パスワード・セッションクッキーなど）が流出し、「FortiBleed」と呼ばれる事案としてJPCERT/CCが緊急注意喚起を発出した。流出したVPN接続情報はダークウェブ上で販売・共有されていることが確認されている</li>
<li>Fortinet製品は世界中の企業・官公庁・通信会社のネットワーク境界防御（ファイアウォール・VPN）に広く使われているため、流出した認証情報を悪用したネットワーク不正侵入のリスクが非常に高い。特にリモートワーク用のVPN接続情報が流出した場合、社内システム全体が危険にさらされる</li>
<li>対策として、FortiGate等のFortinet製品を使用している組織はすぐに（1）VPNユーザーのパスワードをすべて強制リセット、（2）認証ログを点検して不審なアクセスを確認、（3）最新のファームウェアへのアップデート、の3点を実施すること。多要素認証（MFA）の導入がない場合は即時導入が急務だ</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security「Scattered Spider Hackers Plead Guilty on Day 1 of Trial」 https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/</li>
<li>Krebs on Security「Hackers Used Meta's AI Support Bot to Seize Instagram Accounts」 https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/</li>
<li>The Hacker News「Malicious Perplexity Chrome Extension Intercepted Searches and Address Bar Input」 https://thehackernews.com/2026/06/malicious-perplexity-chrome-extension.html</li>
<li>Bleeping Computer「Critical SimpleHelp flaw exploited to deploy new Djinn Infostealer/TaskWeaver malware」 https://www.bleepingcomputer.com/news/security/hackers-exploit-critical-simplehelp-flaw-deploy-new-djinn-infostealer-taskweaver-malware/</li>
<li>Bleeping Computer「Hackers now exploit critical Oracle E-Business flaw in attacks」 https://www.bleepingcomputer.com/news/security/new-oracle-e-business-suite-flaw-now-exploited-in-attacks/</li>
<li>JPCERT/CC「Adobe AcrobatおよびReaderの脆弱性（APSB26-63）に関する注意喚起」 https://www.jpcert.or.jp/at/2026/at260018.html</li>
<li>IPA「Adobe Acrobat および Reader の脆弱性対策について(2026年6月)」 https://www.ipa.go.jp/security/security-alert/2026/0610-adobereader.html</li>
<li>JPCERT/CC「Fortinet製品に関連する認証情報の漏えいに関する注意喚起」 https://www.jpcert.or.jp/at/2026/at260019.html</li>
</ul>

</details>

---

[← 2026-06-30 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
