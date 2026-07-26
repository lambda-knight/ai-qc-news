---
title: "北朝鮮ハッカーの偽Zoom動画からAI開発ツールを乗っ取るマルウェアまで！パッチなきFastjsonの脅威も【2026/07/26】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 北朝鮮ハッカーの偽Zoom動画からAI開発ツールを乗っ取るマルウェアまで！パッチなきFastjsonの脅威も【2026/07/26】

**2026-07-26 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-26-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-26-security)

---

## 概要

今日のセキュリティニュース8本の前半4本は、攻撃者が「信頼されている見た目」を巧妙に偽装する新しい手口。北朝鮮系ハッカーBlueNoroffが偽Zoom会議にAI合成映像まで使って暗号資産関係者を狙う事件、Claude DesktopやCursorなどAI開発ツールに忍び込み認証情報を盗むマルウェア、ランサムウェアを他人に貸し出す「DevMan」の本格的なビジネス基盤、保険業界を狙うフィッシングが入力と同時にアカウントを乗っ取る手口へ進化した話を、ずんだもんと四国めたんが解説します。後半4本は、修正版がまだないFastjsonの深刻な脆弱性、パッチ済みでも未更新サーバーが狙われるGitLab、国内製品GUARDIANWALL MailSuiteの緊急脆弱性、米宅配企業OnTracの情報漏洩というパッチ管理の基本問題です。

▼ 今日のトピック
・北朝鮮系ハッカーBlueNoroffが偽Zoom会議とAI合成映像で暗号資産関係者を狙う
・AI開発ツールに偽の拡張機能を仕込み認証情報を盗み出すマルウェア
・ランサムウェアを他人に貸し出す「DevMan」の運営ポータルが本格的なビジネス基盤に
・保険業界を狙うフィッシングが「入力と同時に乗っ取る」手口に進化
・修正版がまだ出ていないアリババ製JSONライブラリ「Fastjson」の深刻な欠陥
・6週間前に直った欠陥のPoCコードが公開されたGitLab
・キヤノン子会社のメールセキュリティ製品「GUARDIANWALL MailSuite」に緊急の脆弱性
・米宅配企業OnTracがネットワーク侵害を通知、顧客情報にアクセスされた可能性

▼ 参考記事・ソース
・The Hacker News「BlueNoroff Zoom Phishing Kit Profiles Crypto Wallets Before Malware Delivery」: https://thehackernews.com/2026/07/bluenoroff-zoom-phishing-kit-profiles.html
・Wired「A Sneaky Hacking Tool Targeting AI Infrastructure Is Lurking in Victims' Blind Spots」: https://www.wired.com/story/a-sneaky-hacking-tool-targeting-ai-infrastructure-is-lurking-in-victims-blind-spots/
・The Hacker News「DevMan RaaS Portal Centralizes Payload Builds, Victim Management, and Affiliate Payouts」: https://thehackernews.com/2026/07/devman-raas-portal-centralizes-payload.html
・The Hacker News「CTM360 Research Reveals How Insurance Phishing Has Evolved Into Real-Time Account Hijacking」: https://thehackernews.com/2026/07/ctm360-research-reveals-how-insurance.html
・The Hacker News「Fastjson 1.x RCE Vulnerability Targeted in Attacks With No Patched Available」: https://thehackernews.com/2026/07/fastjson-1x-rce-vulnerability-targeted.html
・The Hacker News「Researcher Publishes GitLab RCE PoC Letting Authenticated Users Run Commands as Git」: https://thehackernews.com/2026/07/researcher-publishes-gitlab-rce-poc.html
・IPA「『GUARDIANWALL MailSuite』におけるスタックベースのバッファオーバーフローの脆弱性について（JVN#35567473）」: https://www.ipa.go.jp/security/security-alert/2026/20260513-jvn.html
・Bleeping Computer「OnTrac notifies customers of data breach after network hack」: https://www.bleepingcomputer.com/news/security/ontrac-notifies-customers-of-data-breach-after-network-hack/

#BlueNoroff #Fastjson #GitLab #GUARDIANWALL #DevMan #OnTrac #CTM360 #セキュリティ #サイバーセキュリティ #ゆっくり解説 #ずんだもん #四国めたん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>AI開発ツールを乗っ取るマルウェアから北朝鮮の偽Zoom動画詐欺まで——パッチなきFastjsonの脅威も（2026年7月26日）</h1>
<p><strong>キーワード:</strong> BlueNoroff / Fastjson / GitLab / GUARDIANWALL / DevMan RaaS / CTM360</p>
<h2>オープニング：2026年7月26日 — セキュリティニュース</h2>
<p>今日は8本を取り上げる。前半は攻撃者側の「新しい手口」の話で、北朝鮮系ハッカーが偽のZoom会議に本物そっくりの合成映像まで使う話、AI開発ツールそのものに入り込んで開発者の認証情報を盗むマルウェアの話、ランサムウェアを「他人に貸し出す」ビジネスがどんどん洗練されている話、保険サイトを狙うフィッシングがリアルタイムのなりすましに進化した話と続く。後半はパッチ管理の基本に立ち返り、修正版がまだ出ていないJavaライブラリの深刻な欠陥、6週間前に直った欠陥の攻撃コードが公開されたGitLab、国内メールセキュリティ製品の緊急脆弱性、そして宅配企業の情報漏洩を確認する。攻撃側の技術は日々進化しているが、対策の基本は変わらないという点を今日も意識して見ていこう。</p>
<h2>北朝鮮系ハッカーBlueNoroffが偽Zoom会議とAI合成映像で暗号資産関係者を狙う</h2>
<ul>
<li>セキュリティ企業JUMPSECは7月24日、北朝鮮に関連するとされるハッカー集団「BlueNoroff」が、暗号資産・金融業界の担当者を狙う偽Zoom・Microsoft Teamsフィッシングキットを運用していると報告した。JUMPSECは「BlueNoroffは、乗っ取った業界関係者のアカウント、ソーシャルエンジニアリング、ウォレットの下調べ、マルウェア配布を組み合わせ、繰り返し使える被害者獲得の仕組みに仕立て上げた」と分析している。</li>
<li>攻撃はまず暗号資産業界関係者の正規Telegramアカウントを乗っ取り、そこからCalendly経由の偽の会議招待を送るところから始まる。誘導先の偽サイトでカメラの使用許可を求めた後、実在の元被害者の体の動きにAI生成の顔を合成した映像を見せることで、ビデオ通話が本物であるかのように装う。</li>
<li>侵入後はブラウザの拡張機能を調べて「MetaMask」など暗号資産ウォレットの有無を確認し、価値の高い標的だけを選んでマルウェアを配布する。WindowsではMicrosoft Defenderを無効化してTelegramのセッションクッキーを盗み、Macでは「iCloud キーチェーン」経由でChromeのマスターキーを盗む手口が確認されている。ビデオ通話中に「マイクが聞こえない」といった理由で修正プログラムの実行を促す手口には特に注意したい。</li>
</ul>
<h2>AI開発ツールに偽の拡張機能を仕込み認証情報を盗み出すマルウェア</h2>
<ul>
<li>セキュリティ企業CrowdStrikeは、AIコーディング支援ツールを狙う新型マルウェアを発見したと報告した。このマルウェアは「Claude Desktop」「Cursor」「Visual Studio Code」「Windsurf」といった開発者が日常的に使うAIツールの設定ファイルに、不正な「MCPサーバー」（AIツールが外部機能を呼び出す仕組み）の情報を書き込み、あたかも信頼できる正規の拡張機能であるかのように偽装する。</li>
<li>侵入後はGitHubのアクセストークンを使ってアクセス可能なリポジトリを調べ上げ、悪意あるコードを依存関係として追加したり、コミットやプルリクエストを勝手に作成したりする。トークンが使えない場合はSSH認証に切り替えてリポジトリを複製・改ざんし、直接変更を push する経路も備えている。</li>
<li>盗む対象はパスワード管理ツールのコマンドライン機能や、Apple純正の「メモ」「メッセージ」アプリ、メモアプリ「Joplin」のデータベース、クリップボードの履歴など多岐にわたる。盗んだデータは通常の通信経路が遮断されるとDNSトンネリングに切り替えて外部に送信する。開発者向けAIツールの設定ファイルに見覚えのない項目がないか、定期的に確認することが対策になる。</li>
</ul>
<h2>ランサムウェアを他人に貸し出す「DevMan」の運営ポータルが本格的なビジネス基盤に</h2>
<ul>
<li>スイスのセキュリティ企業PRODAFTは、ランサムウェア・アズ・ア・サービス（他人にランサムウェアを貸し出す仕組み）「DevMan」の運営組織を「Funky Mantis」と名付けて追跡していると報告した。攻撃者向けの専用ポータルサイトには、攻撃用プログラムの作成機能、収益管理、被害者とのやり取り用チャット、サポート窓口、被害者情報の記録、チーム管理、報酬の支払い機能までが一つにまとまっている。</li>
<li>2026年1月にリリースされたバージョン3では、被害者ごとの状態管理や対応期限の追跡、複数人でのチーム作成、権限を分けた共同作業の機能が追加された。身代金が支払われた場合、実行犯である「アフィリエイト」に80%、運営側に20%が渡る仕組みで、それぞれ別のウォレットに入金される。</li>
<li>「Ransomware.Live」の集計によると、DevManは2026年2月4日までに184件の被害を出しており、うち約50件が米国の企業で、技術・医療・金融・行政機関が主な標的だった。ただし2月以降は新たな被害報告がない。PRODAFTは対策として、サービスアカウントやバックアップ用アカウントによるVPNへの対話的ログインを禁止し、リモートアクセスや管理者権限にはフィッシングに強い多要素認証を導入することを勧めている。</li>
</ul>
<h2>保険業界を狙うフィッシングが「入力と同時に乗っ取る」手口に進化</h2>
<ul>
<li>サイバー脅威インテリジェンス企業CTM360は7月25日、保険業界を狙うフィッシングが、これまでの「認証情報を集めて後で悪用する」やり方から「被害者と同時進行でリアルタイムに正規サイトへログインする」やり方へ進化していると報告した。被害者がフィッシングサイトに情報を入力すると同時に、攻撃者側のツールが本物の保険会社サイトへその情報を打ち込んでいく。</li>
<li>この手口では、被害者が一回のセッションでパスワードだけでなくワンタイムパスコードや多要素認証の確認コードまで入力してしまい、その場で攻撃者に横取りされる。従来型の「後で使うために貯めておく」フィッシングより発覚が遅れやすい。</li>
<li>専用の詐欺ツール「InsureOTP Kit」には、被害者の入力状況をリアルタイムで監視する機能やワンタイムパスコードの処理、Telegramとの連携機能が組み込まれている。主な標的地域はサウジアラビアで、ヨーロッパ・米国・インドでも活動が確認されている。見慣れない保険サイトのログイン画面で不自然に長い入力待ちが続く場合は、いったん通信を切って公式サイトから入り直すことが有効な自衛策になる。</li>
</ul>
<h2>修正版がまだ出ていないアリババ製JSONライブラリ「Fastjson」の深刻な欠陥</h2>
<ul>
<li>セキュリティ企業ThreatBookとImpervaは、アリババが開発するJava用JSONライブラリ「Fastjson」の1.xバージョンに存在する脆弱性が、実際の攻撃で悪用されていると報告した。脆弱性はCVE-2026-16723として採番され、アリババによるCVSSスコアは9.0。対象はFastjson 1.2.68から1.2.83までで、「Spring Boot」を使ったJavaアプリケーションで確認されている。</li>
<li>攻撃者が細工したJSONリクエストを送ると、認証なしにJavaプロセスの権限でコードが実行されてしまう。攻撃者が指定した値をクラスの検索処理に変換させ、アプリ内部に埋め込まれたJARファイルから攻撃者が用意したコードを読み込ませる仕組みで、本来は信頼の印であるはずの注釈（アノテーション）がその読み込みを許してしまう抜け穴として使われている。</li>
<li>発見者はFearsOff Cybersecurityのカーリル・フィルソフ氏で、2026年7月25日時点でアリババから1.x向けの修正版は出ていない。当面の回避策として「fastjson.parser.safeMode」の有効化や、危険な自動型変換を無効にした限定版ライブラリへの切り替えが案内されており、根本的には後継の「Fastjson2」への移行が勧められている。</li>
</ul>
<h2>6週間前に直った欠陥のPoCコードが公開されたGitLab</h2>
<ul>
<li>セキュリティ研究者depthfirst氏は7月24日、開発プラットフォーム「GitLab」の欠陥を突く実証コードを公開した。対象はGitLabが使うRuby用JSONパーサー「Oj」に存在する2つのメモリ破損の不具合で、GitLabは今年6月10日に修正済みだが、まだ更新していないセルフホスト版のサーバーは影響を受ける。</li>
<li>攻撃には「プロジェクトにコードをプッシュできる」一般ユーザーの権限があれば十分で、細工したJupyterノートブックをコミットし、その差分表示を開かせることでメモリ上の位置情報を漏えいさせ、最終的に「git」ユーザーの権限でコマンドを実行できてしまう。無料版から最上位版まで全ての提供形態が対象になる。</li>
<li>対象バージョンはGitLab CE/EEの15.2.0から18.10.7、18.11.0から18.11.4、19.0.0から19.0.1。GitLabは18.10.8、18.11.5、19.0.2への更新を案内しており、15.2から18.9まではセキュリティサポートの対象外となっているため、対応バージョンへの移行そのものが必要になる。</li>
</ul>
<h2>キヤノン子会社のメールセキュリティ製品「GUARDIANWALL MailSuite」に緊急の脆弱性</h2>
<ul>
<li>IPA（情報処理推進機構）は、キヤノンマーケティングジャパンが提供するメールセキュリティ製品「GUARDIANWALL MailSuite」に、スタックベースのバッファオーバーフローの脆弱性が存在すると注意喚起している（JVN#35567473、CVE-2026-32661）。CVSSの基本値は9.8で「緊急」に分類される。</li>
<li>対象は、細工したリクエストを送られると任意のコードを実行されるおそれがあるというもので、オンプレミス版のバージョン1.4.00から2.4.26まで、およびSaaS版では2026年4月30日のメンテナンス以前のバージョンが該当する。SaaS版は同メンテナンスで既に修正済みだが、オンプレミス版を導入している組織は開発者が提供する修正プログラムの適用が必要になる。</li>
<li>注意喚起の公開日は2026年5月13日で、すでに一定期間が経過しているが、メールサーバーという社外との接点に近い製品の緊急脆弱性であるため、社内のメールシステム担当者にオンプレミス版の利用有無とパッチ適用状況を今一度確認してもらう価値がある。</li>
</ul>
<h2>米宅配企業OnTracがネットワーク侵害を通知、顧客情報にアクセスされた可能性</h2>
<ul>
<li>米国の民間小包配送会社OnTracは、企業ネットワークへの不正アクセスがあり、顧客の氏名や個人情報にアクセスされた可能性があると顧客に通知した。不審なアクセスは2026年3月20日から22日にかけて発生し、同社は3月23日にこれを検知したとしている。</li>
<li>OnTracは2021年にOnTrac LogisticsとLaserShipが合併して発足した配送会社で、米国35州102拠点、7000以上の独立配送業者と連携し、米国人口の約70%をカバーする規模を持つ。同社は外部のセキュリティ専門家と契約して被害範囲を調査し、「漏えいしたとみられるデータは再び保護され、拡散していないことを確認した」としており、これは身代金の支払いを示唆する表現とみられる。</li>
<li>影響を受けた顧客には、CyberScoutを通じて12か月間の無料クレジット監視および身元盗難保護サービスが提供される。執筆時点でランサムウェア集団がこの侵害への関与を公表した形跡はない。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>前半の4本——BlueNoroffの偽Zoom、AI開発ツールを狙うマルウェア、DevManのランサムウェア貸し出しビジネス、CTM360が報告したリアルタイム型フィッシング——は、いずれも攻撃者が「信頼されている見た目・仕組み」を巧妙に偽装する点が共通していた。ビデオ通話や開発ツールの設定、ログイン画面が「いつも通り」に見えても油断しないことが共通の教訓になる。</li>
<li>後半の3本——修正版がまだないFastjson、パッチ済みだが未更新サーバーが狙われるGitLab、緊急度の高いGUARDIANWALLの脆弱性——は、パッチ適用のタイミングそのものが被害を左右することを示している。特にFastjsonは回避策の適用を急ぎたい。</li>
<li>OnTracの情報漏洩は、日頃使う宅配サービスにも同様のリスクがあることを改めて示した事例で、心当たりのある人はクレジット監視サービスの案内を見逃さないようにしたい。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>The Hacker News「BlueNoroff Zoom Phishing Kit Profiles Crypto Wallets Before Malware Delivery」 https://thehackernews.com/2026/07/bluenoroff-zoom-phishing-kit-profiles.html</li>
<li>Wired「A Sneaky Hacking Tool Targeting AI Infrastructure Is Lurking in Victims' Blind Spots」 https://www.wired.com/story/a-sneaky-hacking-tool-targeting-ai-infrastructure-is-lurking-in-victims-blind-spots/</li>
<li>The Hacker News「DevMan RaaS Portal Centralizes Payload Builds, Victim Management, and Affiliate Payouts」 https://thehackernews.com/2026/07/devman-raas-portal-centralizes-payload.html</li>
<li>The Hacker News「CTM360 Research Reveals How Insurance Phishing Has Evolved Into Real-Time Account Hijacking」 https://thehackernews.com/2026/07/ctm360-research-reveals-how-insurance.html</li>
<li>The Hacker News「Fastjson 1.x RCE Vulnerability Targeted in Attacks With No Patched Available」 https://thehackernews.com/2026/07/fastjson-1x-rce-vulnerability-targeted.html</li>
<li>The Hacker News「Researcher Publishes GitLab RCE PoC Letting Authenticated Users Run Commands as Git」 https://thehackernews.com/2026/07/researcher-publishes-gitlab-rce-poc.html</li>
<li>IPA「『GUARDIANWALL MailSuite』におけるスタックベースのバッファオーバーフローの脆弱性について（JVN#35567473）」 https://www.ipa.go.jp/security/security-alert/2026/20260513-jvn.html</li>
<li>Bleeping Computer「OnTrac notifies customers of data breach after network hack」 https://www.bleepingcomputer.com/news/security/ontrac-notifies-customers-of-data-breach-after-network-hack/</li>
</ul>

</details>

---

[← 2026-07-26 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
