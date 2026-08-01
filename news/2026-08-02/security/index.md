---
title: "70億円がわずか41分で消えた【ハードウェアウォレットの落とし穴】2026/08/02"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 70億円がわずか41分で消えた【ハードウェアウォレットの落とし穴】2026/08/02

**2026-08-02 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-08-02-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-08-02-security)

---

## 概要

製薬大手アムジェンの患者情報流出、ロンドン交通局を止めたハッカー集団の有罪答弁、そしてビットコイン専用ハードウェアウォレット「Coldcard」の欠陥が招いた41分間・約70億円の窃取事件。広告網・ホテルWi-Fi・AdobeとWordPressの脆弱性、Microsoftの過去最多パッチまで、今日のセキュリティニュースをずんだもんと四国めたんが解説します。

▼ 今日のトピック
・製薬大手アムジェン、クラウドから患者情報流出
・ロンドン交通局を止めたハッカー集団「Scattered Spider」、初日に有罪答弁
・ビットコイン専用ハードウェアウォレット「Coldcard」の欠陥で41分間に約70億円流出
・広告配信スクリプトが改ざんされ、暗号資産の送金先アドレスがすり替え
・ホテルの偽Wi-Fiで盗聴マルウェア「CornFlake」を配信する攻撃「CaptiveCrunch」
・Adobe Campaign ClassicにCVSS満点10.0の脆弱性
・WordPressプラグイン「wp2shell」に複数の脆弱性
・Microsoft、月例更新で過去最多570件の脆弱性を修正

▼ 参考記事・ソース
・Bleeping Computer「Amgen says cloud data breach exposed patient health, proprietary info」 https://www.bleepingcomputer.com/news/security/amgen-says-cloud-data-breach-exposed-patient-health-proprietary-info/
・Krebs on Security「Scattered Spider Hackers Plead Guilty on Day 1 of Trial」 https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/
・The Hacker News「Coldcard Hardware Wallet Flaw Linked to $70 Million Bitcoin Theft in 41 Minutes」 https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html
・The Hacker News「Hackers Poison Adform Script to Swap Crypto Wallet Addresses Across Customer Sites」 https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html
・The Hacker News「Hijacked Hotel Wi-Fi Pushes Fake Updates to Deliver Surveillance Malware」 https://thehackernews.com/2026/08/hijacked-hotel-wi-fi-pushes-fake.html
・The Hacker News「Adobe Campaign Classic CVSS 10.0 Flaw Could Run Code Without User Interaction」 https://thehackernews.com/2026/08/adobe-campaign-classic-cvss-100-flaw.html
・IPA セキュリティ「WordPressの脆弱性対策について（CVE-2026-60137、CVE-2026-63030：wp2shell）」 https://www.ipa.go.jp/security/security-alert/2026/alert20260722.html
・Krebs on Security「Microsoft Patches a Record 570 Security Flaws」 https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/
・The Hacker News「Three Recent Chrome Releases Fix 1,442 Flaws, More Than Prior 23 Updates Combined」 https://thehackernews.com/2026/07/three-recent-chrome-releases-fix-1442.html

#セキュリティニュース #サイバー攻撃 #ハッキング #ゆっくり解説 #ずんだもん #四国めたん #脆弱性 #暗号資産 #ランサムウェア #情報漏洩 #フィッシング詐欺 #IT セキュリティ

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年8月2日）</h1>
<p><strong>キーワード:</strong> Amgen患者データ流出 / Scattered Spider有罪答弁 / Coldcard70億円流出 / 広告スクリプト改ざん / ホテルWi-Fi監視マルウェア / Adobe満点脆弱性 / WordPress改ざん / Microsoft過去最多パッチ</p>
<h2>オープニング：2026年8月2日 — セキュリティニュース</h2>
<p>本日は、製薬大手アムジェンのクラウド情報流出、ロンドン交通局を止めたハッカー集団の有罪答弁、ビットコインウォレットの欠陥を突いた41分間で70億円規模の窃取、広告配信網とホテルWi-Fiを悪用した攻撃、そしてAdobeとWordPressの深刻な脆弱性、Microsoftの過去最多パッチを取り上げる。</p>
<h2>製薬大手アムジェン、クラウドから患者情報流出</h2>
<ul>
<li>米製薬大手アムジェンは、外部委託先が運用する複数のクラウドシステムから、企業データと患者の医療情報が攻撃者に盗まれたと発表した。</li>
<li>盗まれた情報には、社内の機密資料とともに患者の健康に関する個人情報が含まれるとされる。</li>
<li>「クラウド＝安全」ではなく、自社が直接管理しない委託先のクラウド環境も、情報漏えいの入り口になり得ることを示す事例である。</li>
<li>医療機関や製薬会社の顧客・患者は、自分の情報がどの委託先経由で扱われているかを普段意識しにくいため、企業側には委託先を含めた監査の徹底が求められる。</li>
</ul>
<h2>ロンドン交通局を止めたハッカー集団、初日に有罪答弁</h2>
<ul>
<li>英国で、2024年8月にロンドン交通局（TfL）のシステムを機能停止に追い込んだサイバー攻撃に関与したとして、著名なハッカー集団「Scattered Spider」の中心メンバー2人が、6週間を見込んでいた裁判の初日に有罪を認めた。</li>
<li>Scattered Spiderは、電話一本で従業員をだまして社内システムに侵入する「ソーシャルエンジニアリング」を得意とする手口で知られる。</li>
<li>高度なハッキング技術がなくても、電話やチャットでの巧妙な「なりすまし」だけで公共交通機関のような大規模インフラを止められることを改めて示した事件である。</li>
<li>企業・自治体は、パスワードリセットや権限変更を依頼する電話・チャットに対して、本人確認手順を形だけでなく厳格に運用する必要がある。</li>
</ul>
<h2>ビットコイン専用ハードウェアウォレット「Coldcard」の欠陥で41分間に70億円超流出</h2>
<ul>
<li>暗号資産調査会社ギャラクシー・リサーチの分析により、7月30日に41分間で1,196件のビットコインアドレスから約1,082.65BTC（当時の価値で約70億円）が一斉に引き出された事件が、ハードウェアウォレット「Coldcard」のファームウェアの欠陥に起因することが判明した。</li>
<li>原因は2021年3月のファームウェア統合時のミスで、本来ランダムであるべき「シード（秘密鍵のもと）」生成が、予測可能なソフトウェア乱数生成器に流れ込んでいたことにある。</li>
<li>ハードウェアウォレットは「オフラインだから安全」と思われがちだが、内部の乱数生成に欠陥があれば、鍵そのものが最初から他人に推測可能な状態になっているという、根本からの脆弱性だった。</li>
<li>該当ファームウェアを使い続けている利用者は、資産を新しいウォレット・新しいシードへ速やかに移し替える対応が必要である。</li>
</ul>
<h2>広告配信スクリプトが改ざんされ、暗号資産の送金先アドレスがすり替えられる</h2>
<ul>
<li>広告技術企業Adformが配信するJavaScriptファイルが攻撃者に改ざんされ、閲覧者のブラウザ上で暗号資産の送金先アドレスを勝手に書き換える不正なコードが仕込まれていた。</li>
<li>Adformは7月27日に不正を検知し、該当コードを除去して顧客企業に通知、当局にも報告した。</li>
<li>7月27日に該当スクリプトを含むサイトを閲覧し、ビットコインなどのアドレスをコピーして送金した利用者は、送金先が攻撃者のものにすり替わっていた可能性がある。</li>
<li>広告配信網のような「裏側の共通部品」が改ざんされると、利用者が信頼している複数のサイトに同時に被害が広がる。暗号資産を送金する際は、コピーしたアドレスを送信直前にもう一度目視確認する習慣が有効である。</li>
</ul>
<h2>ホテルの偽Wi-Fiで盗聴マルウェアを配信する攻撃「CaptiveCrunch」</h2>
<ul>
<li>Microsoftは、ホテルのWi-Fi接続を乗っ取り、偽のブラウザ更新画面を表示させてリモートアクセス型トロイの木馬「CornFlake」を仕込む攻撃キャンペーン「CaptiveCrunch」を報告した。</li>
<li>CornFlakeはウェブカメラの映像、マイク音声、キーボード入力を盗み取れる本格的な監視マルウェアで、ロシア関連の攻撃グループ「Midnight Blizzard」の下部組織「Storm-2945」の関与が疑われている。</li>
<li>出張や旅行でホテルのWi-Fiに接続した際、ブラウザの「更新してください」という表示は、必ずしも正規のものとは限らない。</li>
<li>ホテルなど公共のWi-Fiに接続する際は、ブラウザやOSの更新はWi-Fi経由の通知からではなく、自分で公式サイト・公式アプリから行うことが望ましい。</li>
</ul>
<h2>Adobe Campaign Classicに最高深刻度（CVSS満点）の脆弱性</h2>
<ul>
<li>Adobeは、企業向けマーケティング自動化ツール「Campaign Classic（ACC）」に、CVSSスコアで最高値の10.0を記録する脆弱性（CVE-2026-48449）を修正する更新を公開した。</li>
<li>権限の確認処理に不備があり、攻撃者が利用者の操作を一切必要とせず、遠隔から任意のコードを実行できる可能性があるとされる。</li>
<li>企業のマーケティング部門が日常的に使うツールが、利用者が何もしなくても乗っ取られ得る状態だった点で、影響範囲が広い。</li>
<li>該当製品を利用する企業は、修正パッチの適用を最優先で行う必要がある。</li>
</ul>
<h2>WordPressプラグイン「wp2shell」に複数の脆弱性</h2>
<ul>
<li>IPA（情報処理推進機構）は、WordPress向けプラグインに、CVE-2026-60137とCVE-2026-63030の2件の脆弱性が見つかったとして対策を呼びかけた。</li>
<li>国内でも多数のブログ・企業サイトがWordPressで運用されており、プラグインの脆弱性を放置すると、サイトの改ざんや情報窃取に悪用される恐れがある。</li>
<li>ホームページ運営者にとって、本体だけでなくプラグイン単位での更新確認が抜けやすい点に注意が必要である。</li>
<li>IPAは該当プラグインの利用者に対し、提供元が公開する最新版への速やかな更新を推奨している。</li>
</ul>
<h2>Microsoft、月例更新で過去最多570件の脆弱性を修正</h2>
<ul>
<li>Microsoftは月例セキュリティ更新で、WindowsをはじめとするMicrosoft製品の脆弱性570件以上を修正した。これは前月の記録的な件数のほぼ3倍にあたる。</li>
<li>Microsoftは、この急増の背景としてAI（人工知能）を活用した脆弱性発見手法の導入を挙げている。</li>
<li>同時期にGoogleも、直近3回のChromeアップデートでその前の23回分を上回る1,442件の脆弱性を修正しており、AIによるバグ発見が業界全体で修正件数を急増させている。</li>
<li>修正件数の急増は「危険が増えた」というより「これまで見つかっていなかった穴が見えるようになった」側面が大きいが、利用者側にはOS・ブラウザの自動更新を切らずに常に最新状態を保つことが、これまで以上に重要になっている。</li>
</ul>
<h2>まとめ</h2>
<p>今日の8件は、クラウド委託先、ソーシャルエンジニアリング、ハードウェアウォレットの内部欠陥、広告網、公共Wi-Fi、業務ツール、CMSプラグイン、そしてOS・ブラウザ本体まで、生活や仕事のあらゆる接点にリスクが分散していることを示した。AIによる脆弱性発見の加速で「見つかる欠陥の数」自体が増えている今、更新を後回しにしないことが最大の防御になる。</p>
<h2>参考ソース</h2>
<ul>
<li>Bleeping Computer「Amgen says cloud data breach exposed patient health, proprietary info」 https://www.bleepingcomputer.com/news/security/amgen-says-cloud-data-breach-exposed-patient-health-proprietary-info/</li>
<li>Krebs on Security「Scattered Spider Hackers Plead Guilty on Day 1 of Trial」 https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/</li>
<li>The Hacker News「Coldcard Hardware Wallet Flaw Linked to $70 Million Bitcoin Theft in 41 Minutes」 https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html</li>
<li>The Hacker News「Hackers Poison Adform Script to Swap Crypto Wallet Addresses Across Customer Sites」 https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html</li>
<li>The Hacker News「Hijacked Hotel Wi-Fi Pushes Fake Updates to Deliver Surveillance Malware」 https://thehackernews.com/2026/08/hijacked-hotel-wi-fi-pushes-fake.html</li>
<li>The Hacker News「Adobe Campaign Classic CVSS 10.0 Flaw Could Run Code Without User Interaction」 https://thehackernews.com/2026/08/adobe-campaign-classic-cvss-100-flaw.html</li>
<li>IPA セキュリティ「WordPressの脆弱性対策について（CVE-2026-60137、CVE-2026-63030：wp2shell）」 https://www.ipa.go.jp/security/security-alert/2026/alert20260722.html</li>
<li>Krebs on Security「Microsoft Patches a Record 570 Security Flaws」 https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/</li>
<li>The Hacker News「Three Recent Chrome Releases Fix 1,442 Flaws, More Than Prior 23 Updates Combined」 https://thehackernews.com/2026/07/three-recent-chrome-releases-fix-1442.html</li>
</ul>

</details>

---

[← 2026-08-02 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
