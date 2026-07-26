---
title: "INTERPOL5811人逮捕・新型破壊マルウェア「GigaWiper」 セキュリティニュース【2026/07/10】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# INTERPOL5811人逮捕・新型破壊マルウェア「GigaWiper」 セキュリティニュース【2026/07/10】

**2026-07-10 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-10-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-10-security)

---

## 概要

INTERPOL主導の国際詐欺撲滅作戦「ファーストライト2026」で97カ国が協力し5,811人を逮捕した明るいニュース、企業のGitHub組織を密かに偵察する「休眠アカウント」悪用の手口、ディスク消去から偽ランサムウェアまで3つの破壊機能を1つにまとめた新型バックドア「GigaWiper」、セキュリティソフトを無力化する不正カーネルドライバー「PoisonX」を使うランサムウェア「GodDamn」、Windows Defender自体の権限昇格の欠陥「RoguePlanet」、暗号資産ウォレットの合言葉を盗む偽SDKのnpm混入、パッケージインストール時の自動実行を標準オフにしたnpm12、そしてAIが誘い文句を自動生成する新型フィッシング基盤「Forg365」まで、今日のセキュリティニュース8本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・詐欺グループ摘発、97カ国が協力——INTERPOL主導「ファーストライト2026」で5811人逮捕
・「休眠アカウント」が攻撃の下見役に——企業のGitHub組織を密かに偵察する手口が拡大
・パソコンを丸ごと破壊する「3in1」の新型バックドア「GigaWiper」
・ランサムウェア「GodDamn」がセキュリティソフトを無力化する裏ワザ「PoisonX」
・Windows Defenderのウイルス検査エンジン自体に管理者権限を奪われる欠陥「RoguePlanet」
・暗号資産の「命の次に大事な合言葉」を盗む偽SDKがnpmに混入
・「入れただけでウイルス実行」を防ぐ——npmがインストールスクリプトを標準で無効化
・AIが偽メールを自動生成——Microsoft 365を狙う新型フィッシング基盤「Forg365」

▼ 参考記事・ソース
・Bleeping Computer「Police arrests 5,800 suspects in global anti-fraud crackdown」
  https://www.bleepingcomputer.com/news/security/police-arrests-5-800-suspects-in-global-anti-fraud-crackdown/
・The Hacker News「Dormant GitHub Accounts Help Attackers Blend In While Mapping Corporate Orgs」
  https://thehackernews.com/2026/07/dormant-github-accounts-help-attackers.html
・The Hacker News「New GigaWiper Windows Backdoor Bundles Disk Wiping, Fake Ransomware, and Spyware」
  https://thehackernews.com/2026/07/new-gigawiper-windows-backdoor-bundles.html
・The Hacker News「GodDamn Ransomware Uses PoisonX Driver to Disable Endpoint Defenses」
  https://thehackernews.com/2026/07/goddamn-ransomware-uses-poisonx-driver.html
・The Hacker News「Microsoft Patches RoguePlanet Defender Flaw That Can Grant SYSTEM Privileges」
  https://thehackernews.com/2026/07/microsoft-patches-rogueplanet-defender.html
・Bleeping Computer「Injective SDK on npm infected with cryptocurrency wallet stealer」
  https://www.bleepingcomputer.com/news/security/injective-sdk-on-npm-infected-with-cryptocurrency-wallet-stealer/
・The Hacker News「npm 12 Disables Install Scripts by Default to Reduce Supply Chain Risk」
  https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html
・Bleeping Computer「New Forg365 phishing platform uses AI to target Microsoft 365 accounts」
  https://www.bleepingcomputer.com/news/security/new-forg365-phishing-platform-uses-ai-to-target-microsoft-365-accounts/

#セキュリティ #サイバーセキュリティ #ランサムウェア #情報漏洩 #ゆっくり解説 #ずんだもん #ハッキング #脆弱性 #セキュリティニュース

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月10日）</h1>
<h2>詐欺グループ摘発、97カ国が協力——INTERPOL主導「ファーストライト2026」で5811人逮捕</h2>
<ul>
<li>INTERPOL（国際刑事警察機構）が調整した国際的な詐欺撲滅作戦「ファーストライト2026」が2026年1月から4月にかけて実施され、97カ国の捜査機関が参加した</li>
<li>対象は「ソーシャルエンジニアリング詐欺（人の心理につけこむ手口）」全般で、ビジネスメール詐欺（取引先を装った送金指示）、性的脅迫、なりすまし、ロマンス詐欺、投資詐欺、資金洗浄が含まれる</li>
<li>成果として5,811人を逮捕、2億9,300万ドル（約450億円）相当の資金を押収、3万1,014の銀行口座を凍結。世界で14万2,000人以上の被害が確認された</li>
<li>単発の技術的な脆弱性対策だけでなく、こうした国際共同捜査による「摘発」が詐欺被害の抑止に直結することを示す事例。個人としても、投資話や恋愛感情に付け込む勧誘には引き続き警戒が必要</li>
</ul>
<h2>「休眠アカウント」が攻撃の下見役に——企業のGitHub組織を密かに偵察する手口が拡大</h2>
<ul>
<li>セキュリティ企業Datadog Security Labsが、企業のGitHub組織・リポジトリ・ユーザーアカウントをGitHub API経由で網羅的に調べ上げる、複数の攻撃キャンペーンを警告した</li>
<li>攻撃者は自動化されたスクレイピングツールを使い、正規サービスを装ったユーザーエージェント（アクセス元の識別情報）や、何年も使われていない「幽霊アカウント」、盗んだOAuthトークン・個人アクセストークンを悪用して活動を紛れ込ませている</li>
<li>こうした偵察活動自体はデータを盗むわけではないが、後続のフィッシングやサプライチェーン攻撃（正規の開発体制に紛れ込む攻撃）の下調べとして使われるとみられる</li>
<li>企業の情報システム担当者は、長期間ログインのない「休眠」メンバーアカウントの棚卸しや、不要なアクセストークンの失効を定期的に行うことが、こうした偵察を早期に察知する手がかりになる</li>
</ul>
<h2>パソコンを丸ごと破壊する「3in1」の新型バックドア「GigaWiper」</h2>
<ul>
<li>Microsoftが、Windowsを狙う新しい破壊型マルウェア「GigaWiper」を解析した。特徴は、既存の3つの破壊プログラムを1つにまとめ、攻撃者が好きな機能を選んで実行できる点</li>
<li>選べる機能は「ディスク全体を消去する」「Windowsのシステム部分を上書きする」「復号キーを一切保存しない“偽物のランサムウェア”でファイルを暗号化する」の3種類</li>
<li>3つ目の「偽ランサムウェア」が特に悪質で、身代金を払っても最初から元に戻す手段が存在しない、単なるデータ破壊を「ランサムウェアに見せかけている」だけの攻撃になっている</li>
<li>「身代金を払えば復旧できる」という前提自体が崩れつつあることを示す事例で、定期的なバックアップを取り、ネットワークから切り離した場所に保管しておくことが最後の防衛線になる</li>
</ul>
<h2>ランサムウェア「GodDamn」がセキュリティソフトを無力化する裏ワザ「PoisonX」</h2>
<ul>
<li>セキュリティ企業Symantecの脅威分析チームが、新しいランサムウェア「GodDamn」を報告した。2026年5月21日に初めて確認され、既存のランサムウェア「Beast」の改名版とみられている</li>
<li>GodDamnは「PoisonX」という不正なカーネルドライバー（OSの最も深い部分で最高権限を持って動くプログラム）を使い、パソコンに入っているウイルス対策ソフトやセキュリティ監視ソフトを機能停止させてから暗号化を実行する</li>
<li>カーネルドライバーはOSから絶大な信頼を与えられているため、これが悪用されるとセキュリティソフト側が「見えない・止められない」状態にされてしまう</li>
<li>企業のシステム管理者は、見慣れないドライバーのインストールや、セキュリティソフトが突然停止する挙動を重大な兆候として警戒する必要がある</li>
</ul>
<h2>Windows Defenderのウイルス検査エンジン自体に管理者権限を奪われる欠陥「RoguePlanet」</h2>
<ul>
<li>Microsoftが、Windows Defenderの中核である「Malware Protection Engine（mpengine.dll）」の権限昇格の脆弱性（CVE-2026-50656、深刻度7.8）を修正した</li>
<li>この欠陥は詳細情報が公開されてから約1カ月遅れての修正となった</li>
<li>本来ウイルスをスキャンして守ってくれるはずのエンジン自体に欠陥があると、限られた権限しか持たない攻撃者でも、そこを足がかりにパソコンの最高権限「SYSTEM」を奪える恐れがある</li>
<li>Windows Defenderは自動更新されることが多いが、企業で更新を止めている環境がないか、情報システム担当者は改めて確認しておきたい</li>
</ul>
<h2>暗号資産の「命の次に大事な合言葉」を盗む偽SDKがnpmに混入</h2>
<ul>
<li>暗号資産関連企業Injective LabsのSDK（アプリに組み込んで使う部品プログラム）のGitHubリポジトリが乗っ取られ、悪意あるパッケージがnpmに公開された</li>
<li>このパッケージは、暗号資産ウォレットの秘密鍵と「ニーモニックシードフレーズ（ウォレットを復元できる呪文のような合言葉）」を盗み出す機能を持っていた</li>
<li>ニーモニックシードフレーズが盗まれると、そのウォレットに入っている資産をすべて、しかも一瞬で外部に送金されてしまう。パスワードの再設定のような救済手段は存在しない</li>
<li>Injective関連の開発を行っているエンジニアは該当パッケージの利用有無を確認し、少しでも心当たりがあればウォレットの資産を安全な新しいものへ即座に移すべき</li>
</ul>
<h2>「入れただけでウイルス実行」を防ぐ——npmがインストールスクリプトを標準で無効化</h2>
<ul>
<li>GitHubが運営するパッケージ配布サイト「npm」の最新版（バージョン12）で、パッケージをインストールした瞬間に自動実行される「インストールスクリプト」が標準でオフに変更された</li>
<li>あわせて、二段階認証を回避できてしまう仕組みだった「granular access token（きめ細かいアクセストークン）」の廃止も発表された</li>
<li>これまで悪意あるパッケージの多くが、この自動実行の仕組みを悪用して、開発者が気づかないうちにマルウェアを仕込んできた（直前のInjective SDKの事例もこの手口に近い）</li>
<li>開発者は特別な設定をしなくても今後はこの経路のリスクが下がる形になるが、業務でどうしても自動実行が必要な場合は、信頼できるパッケージだけ個別に許可する運用に切り替える必要がある</li>
</ul>
<h2>AIが偽メールを自動生成——Microsoft 365を狙う新型フィッシング基盤「Forg365」</h2>
<ul>
<li>Microsoft 365のアカウントを専門に狙う新しい「フィッシング代行サービス（PhaaS＝犯罪者向けにフィッシング詐欺の道具一式を貸し出すビジネス）」、「Forg365」が確認された</li>
<li>手口は2つの技術を組み合わせたもので、1つは正規のログイン画面と利用者の間に攻撃者が割り込んで通信を盗み見る「AiTM（中間者攻撃）」、もう1つはログイン用の確認コードを入力させてだます「デバイスコードフィッシング」</li>
<li>さらにAIを使って、本物そっくりの誘い文句（フィッシングメールの文面）を自動生成する機能も備えている</li>
<li>「二段階認証をしているから安全」とは言い切れない攻撃手法のため、Microsoft 365を業務で使う人は、身に覚えのないログインコード入力の求めには絶対に応じず、公式アプリ経由での通知のみを信用するようにしたい</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>https://www.bleepingcomputer.com/news/security/police-arrests-5-800-suspects-in-global-anti-fraud-crackdown/</li>
<li>https://thehackernews.com/2026/07/dormant-github-accounts-help-attackers.html</li>
<li>https://thehackernews.com/2026/07/new-gigawiper-windows-backdoor-bundles.html</li>
<li>https://thehackernews.com/2026/07/goddamn-ransomware-uses-poisonx-driver.html</li>
<li>https://thehackernews.com/2026/07/microsoft-patches-rogueplanet-defender.html</li>
<li>https://www.bleepingcomputer.com/news/security/injective-sdk-on-npm-infected-with-cryptocurrency-wallet-stealer/</li>
<li>https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html</li>
<li>https://www.bleepingcomputer.com/news/security/new-forg365-phishing-platform-uses-ai-to-target-microsoft-365-accounts/</li>
</ul>

</details>

---

[← 2026-07-10 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
