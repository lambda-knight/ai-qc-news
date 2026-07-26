---
title: "Androidの新マルウェア・Zimbraメール欠陥・CMS世界攻撃を解説【セキュリティニュース 2026/07/13】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# Androidの新マルウェア・Zimbraメール欠陥・CMS世界攻撃を解説【セキュリティニュース 2026/07/13】

**2026-07-13 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-13-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-13-security)

---

## 概要

Androidマルウェア「RedHook」によるワイヤレスADB悪用、脆弱なCMSとプラグインを狙う世界規模の攻撃、Zimbraのメール画面で不正コード実行につながる重大な欠陥、暗号資産SDKのGitHub侵害、オランダ通信大手Odidoの情報流出、パキスタン警察ポータルを足場にした諜報活動、ゼロデイ買い取り企業をめぐる報道まで、7月13日のセキュリティニュースをずんだもんと四国めたんが解説します。

▼ 今日のトピック
・Androidマルウェア「RedHook」、ワイヤレスADBを悪用して端末を操作
・脆弱なCMSとプラグインを狙う世界規模の攻撃を豪州当局が警告
・Zimbraのメール画面に重大な欠陥、細工したメールで不正コード実行のおそれ
・暗号資産SDKのGitHub侵害、秘密鍵を盗むnpmパッケージを配布
・オランダ通信大手Odidoの情報流出、警察が国内ハッカー関与を捜査
・警察ポータルを足場にした諜報活動、複数勢力がパキスタンを標的に
・ゼロデイ買い取りを掲げる新興企業、運営者の経歴をKrebsが報道

▼ 参考記事・ソース
・BleepingComputer「RedHook Android malware now uses Wireless ADB for shell access」
  https://www.bleepingcomputer.com/news/security/redhook-android-malware-now-uses-wireless-adb-for-shell-access/
・BleepingComputer「Australia warns of global campaign targeting vulnerable CMS platforms」
  https://www.bleepingcomputer.com/news/security/australia-warns-of-global-campaign-targeting-vulnerable-cms-platforms/
・The Hacker News「Critical Zimbra Flaw Could Let Crafted Emails Run Malicious Code in User Sessions」
  https://thehackernews.com/2026/07/critical-zimbra-flaw-could-let-crafted_0483473395.html
・The Hacker News「Injective Labs GitHub Compromise Pushes Wallet-Key-Stealing npm Packages」
  https://thehackernews.com/2026/07/injective-labs-github-compromise-pushes.html
・BleepingComputer「Police suspects Dutch hackers were involved in Odido breach」
  https://www.bleepingcomputer.com/news/security/police-suspects-dutch-hackers-were-involved-in-odido-breach/
・The Hacker News「Hackers Weaponize Balochistan Police Portal in Multi-Group Espionage Campaigns」
  https://thehackernews.com/2026/07/hackers-weaponize-balochistan-police.html
・Krebs on Security「Felons, Fraudsters Flog Offensive Cybersecurity Startup」
  https://krebsonsecurity.com/2026/07/felons-fraudsters-flog-offensive-cybersecurity-startup/

#セキュリティ #サイバー攻撃 #情報セキュリティ #Android #脆弱性 #ゼロデイ #ゆっくり解説 #ずんだもん #四国めたん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月13日）</h1>
<h2>Androidマルウェア「RedHook」、ワイヤレスADBを悪用して端末を操作</h2>
<ul>
<li>Android向けマルウェア「RedHook」の新しい版が、Androidの「ワイヤレスデバッグ（Wireless ADB）」機能を悪用し、パソコンをつながずに端末上でコマンドを実行できるようになったと報じられた。ADBは本来、開発者がアプリを検証するための管理用機能である。</li>
<li>端末に不正アプリを入れさせた攻撃者がこの機能を使える状態にすると、通常のアプリより強い権限で操作されるおそれがある。画面を重ねて認証情報を盗むだけでなく、端末をより深く操作する足掛かりになり得る。</li>
<li>一般利用者は、開発者向けオプションやワイヤレスデバッグを普段は有効にしないことが基本になる。公式ストア以外からのアプリ導入、見覚えのない「デバッグを許可」の表示にも応じない。</li>
</ul>
<h2>脆弱なCMSとプラグインを狙う世界規模の攻撃を豪州当局が警告</h2>
<ul>
<li>オーストラリアのサイバーセキュリティセンター（ACSC）が、更新されていないCMS（ウェブサイトの更新・管理システム）と、その拡張プラグインを狙う世界的な悪用キャンペーンについて注意を呼びかけた。</li>
<li>CMSは企業サイトや自治体サイト、ネットショップなどで広く使われるため、ひとつの古い部品が侵入口になると、サイトの改ざん、利用者を偽サイトへ飛ばす攻撃、情報窃取へつながる可能性がある。</li>
<li>運営者はCMS本体だけでなく、使っていないテーマやプラグインも含めて棚卸しし、修正版を適用する必要がある。更新できない部品は停止・削除し、管理画面には多要素認証を設定したい。</li>
</ul>
<h2>Zimbraのメール画面に重大な欠陥、細工したメールで不正コード実行のおそれ</h2>
<ul>
<li>企業・学校などで使われるメールソフト「Zimbra」のClassic Web Clientに、細工したメールを開いた利用者のブラウザ上で悪意あるコードを動かされるおそれのある重大な欠陥が公表された。</li>
<li>これは保存型クロスサイトスクリプティング、略してXSSと呼ばれる問題だ。攻撃者の仕込んだ内容がメールボックス内に残り、被害者が閲覧した時点で、本人のログイン済み画面を利用する形で動作する可能性がある。</li>
<li>Zimbraを運用する組織は、提供元が案内する更新を早急に適用し、管理者・利用者双方で不審なメールの添付やリンクを警戒する必要がある。利用者側だけの注意では防げないため、サーバー側の修正が重要となる。</li>
</ul>
<h2>暗号資産SDKのGitHub侵害、秘密鍵を盗むnpmパッケージを配布</h2>
<ul>
<li>暗号資産関連企業Injective LabsのSDKプロジェクトのGitHubリポジトリが侵害され、攻撃者がnpm上に不正なパッケージを公開したと報じられた。影響した版には、通常の利用状況を記録する機能に見せかけて、ウォレットの秘密鍵や復元フレーズを外部へ送る仕組みが埋め込まれていたという。</li>
<li>SDKはアプリ開発者が外部サービスを組み込むための部品集であり、正規の配布元が侵害されると、開発者が正しいものだと思って更新してしまう危険がある。これはソフトウェア供給網を狙う「サプライチェーン攻撃」の典型例である。</li>
<li>該当SDKを使う開発者は、影響版の有無を確認して安全な版へ更新し、使用したウォレットや開発用環境の認証情報を見直す必要がある。秘密鍵・復元フレーズは絶対にアプリのログや設定ファイルに残さないことも重要だ。</li>
</ul>
<h2>オランダ通信大手Odidoの情報流出、警察が国内ハッカー関与を捜査</h2>
<ul>
<li>オランダ警察は、同国の通信事業者Odidoで2月に起きた情報流出について、オランダ人ハッカーが関与したことを示す強い兆候を見つけたと発表した。被害の全容や関係者の特定は、なお捜査の段階にある。</li>
<li>通信事業者は契約者情報や連絡先、利用に関する情報を大量に扱う。流出した個人情報は、本人を装った電話、偽の料金請求、パスワード再設定を誘うフィッシングに転用されやすい。</li>
<li>利用者は、事業者を名乗るSMSやメールをすぐ信用せず、通知からリンクを開かずに公式アプリや公式サイトで確認することが大切だ。通信事業者側には、侵入経路の調査と影響対象への分かりやすい連絡が求められる。</li>
</ul>
<h2>警察ポータルを足場にした諜報活動、複数勢力がパキスタンを標的に</h2>
<ul>
<li>研究者は、パキスタン・バロチスタン州の警察ポータルにある侵害済み資産が、警察や市民のデータを扱うウェブシステムを足場にした継続的なサイバー諜報活動で悪用されていたと報告した。</li>
<li>活動は2024年2月から2026年4月にかけて確認され、中国・インドとそれぞれ結び付くとみられる複数の攻撃グループが関与した疑いがある。公的機関のサイトが侵害されると、職員だけでなく市民の情報や行政サービスにも影響が及び得る。</li>
<li>国や自治体のシステムでは、公開サイトと内部業務システムを分離し、異常な通信を監視し続けることが欠かせない。個人としても、公的機関を装う連絡で個人情報を求められた場合は、別の公式窓口で確認したい。</li>
</ul>
<h2>ゼロデイ買い取りを掲げる新興企業、運営者の経歴をKrebsが報道</h2>
<ul>
<li>人気ソフトの未公表の欠陥、いわゆるゼロデイ脆弱性を高額で買い取るとうたう新興企業について、Krebs on Securityが運営者の経歴を調査した。報道では、極右の陰謀論に関わった人物や有罪判決を受けた人物が、別名を使った過去の事業と結び付くとされている。</li>
<li>ゼロデイは、修正プログラムがまだ用意されていない弱点を指す。発見者が製品提供者へ安全に報告すれば修正につながる一方、売買の行き先が不透明なら、攻撃用の道具として使われる懸念がある。</li>
<li>脆弱性を見つけた研究者や企業は、提供元のバグ報奨金制度や、信頼できる調整機関を通じた責任ある開示を選ぶことが重要だ。利用者にとっては、見知らぬ企業の「攻撃的セキュリティ」宣伝をうのみにしない視点が必要になる。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>今日の話題は、スマホの管理機能、メール、CMS、開発用パッケージ、通信事業者まで、日常的に使う仕組みのどこでも侵入口になり得ることを示した。</li>
<li>個人は公式ストア以外からアプリを入れない、通知内のリンクからログインしない、多要素認証を有効にするという基本を徹底したい。組織は更新と不要な機能の停止、侵害を前提にした監視を継続する必要がある。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>BleepingComputer: RedHook Android malware now uses Wireless ADB for shell access — https://www.bleepingcomputer.com/news/security/redhook-android-malware-now-uses-wireless-adb-for-shell-access/</li>
<li>BleepingComputer: Australia warns of global campaign targeting vulnerable CMS platforms — https://www.bleepingcomputer.com/news/security/australia-warns-of-global-campaign-targeting-vulnerable-cms-platforms/</li>
<li>The Hacker News: Critical Zimbra Flaw Could Let Crafted Emails Run Malicious Code in User Sessions — https://thehackernews.com/2026/07/critical-zimbra-flaw-could-let-crafted_0483473395.html</li>
<li>The Hacker News: Injective Labs GitHub Compromise Pushes Wallet-Key-Stealing npm Packages — https://thehackernews.com/2026/07/injective-labs-github-compromise-pushes.html</li>
<li>BleepingComputer: Police suspects Dutch hackers were involved in Odido breach — https://www.bleepingcomputer.com/news/security/police-suspects-dutch-hackers-were-involved-in-odido-breach/</li>
<li>The Hacker News: Hackers Weaponize Balochistan Police Portal in Multi-Group Espionage Campaigns — https://thehackernews.com/2026/07/hackers-weaponize-balochistan-police.html</li>
<li>Krebs on Security: Felons, Fraudsters Flog Offensive Cybersecurity Startup — https://krebsonsecurity.com/2026/07/felons-fraudsters-flog-offensive-cybersecurity-startup/</li>
</ul>

</details>

---

[← 2026-07-13 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
