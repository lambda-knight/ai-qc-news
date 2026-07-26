---
title: "FBIがスマートTVボットネット摘発・議員自身がPegasusで盗聴される皮肉 セキュリティニュース【2026/07/04】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# FBIがスマートTVボットネット摘発・議員自身がPegasusで盗聴される皮肉 セキュリティニュース【2026/07/04】

**2026-07-04 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-04-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-04-security)

---

## 概要

FBIが200万台超のスマートTVを悪用したPopaボットネットとNetNutプロキシ基盤を摘発、スパイウェア問題を調査していた元欧州議会議員自身がPegasusで盗聴されていた事例、Microsoft 365を狙うフィッシング代行サービス「ARToken」、北朝鮮関連の偽npmパッケージ、Mac向け新型情報窃取ツール「PamStealer」、Androidにも影響するLinuxカーネルの重大脆弱性「Bad Epoll」、Check Point製品の認証回避脆弱性など、今日のセキュリティニュース7本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・FBIがNetNutプロキシ基盤とPopaボットネットを摘発——200万台超のスマートTV等が悪用
・欧州議会でスパイウェア問題を調査していた議員自身がPegasusで盗聴される
・フィッシング代行サービス「ARToken」がMicrosoft 365利用者の認証情報を狙う
・北朝鮮関連の攻撃者が偽npmパッケージで開発者の秘密情報を窃取
・偽クリップボードアプリ「Maccy」を装うMac向け新型情報窃取ツール「PamStealer」
・LinuxカーネルにAndroidも直撃する「Bad Epoll」脆弱性——一般ユーザー権限からroot奪取
・Check Point製品に認証回避の脆弱性——実際の攻撃で悪用を確認（CVE-2026-50751）

▼ 参考ソース
- Krebs on Security: FBI Seizes NetNut Proxy Platform, Popa Botnet
  https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/
- The Hacker News: European Parliament Member Investigating Spyware Was Hacked With Pegasus
  https://thehackernews.com/2026/07/european-parliament-member.html
- Bleeping Computer: ARToken PhaaS exposes EvilTokens' Microsoft 365 phishing toolkit
  https://www.bleepingcomputer.com/news/security/artoken-phaas-exposes-eviltokens-microsoft-365-phishing-toolkit/
- The Hacker News: North Korea-Linked npm Packages Mimic Rollup Polyfills to Steal Developer Secrets
  https://thehackernews.com/2026/07/north-korea-linked-npm-packages-mimic.html
- The Hacker News: PamStealer Uses Fake Maccy Sites and PAM Checks to Steal Mac Login Passwords
  https://thehackernews.com/2026/07/pamstealer-uses-fake-maccy-sites-and.html
- The Hacker News: New "Bad Epoll" Linux Kernel Flaw Lets Unprivileged Users Gain Root, Hits Android
  https://thehackernews.com/2026/07/new-bad-epoll-linux-kernel-flaw-lets.html
- JPCERT/CC: Check Point Software Technologies社製品における認証バイパスの脆弱性（CVE-2026-50751）に関する注意喚起
  https://www.jpcert.or.jp/at/2026/at260016.html
- IPA: Check Point Software Technologies製品の脆弱性対策について(CVE-2026-50751)
  https://www.ipa.go.jp/security/security-alert/2026/alert20260610.html

#セキュリティ #サイバーセキュリティ #フィッシング #マルウェア #ずんだもん #四国めたん #ゆっくり解説 #Pegasus #Linux #Android

---

<details>
<summary>スライド（クリックで展開）</summary>

<h2>FBIがNetNutプロキシ基盤とPopaボットネットを摘発——200万台超のスマートTV等が悪用</h2>
<ul>
<li>イスラエルの上場企業Alarum Technologies傘下の住宅用プロキシサービス「NetNut」が、家庭用機器を無断で「プロキシノード」として使うボットネット「Popa」と関連していると判明</li>
<li>2026年6月19日に複数のセキュリティ企業が関連性を公表、7月2日にFBIがGoogleやLumenと協力して数百のドメインを押収</li>
<li>少なくとも200万台以上のデバイス（主にスマートTVなど）が持ち主の同意なく悪用されていた</li>
<li>押収後、Googleは数百万台がプロキシプールから除外されたと報告</li>
<li>一般ユーザーへの対策: 大手メーカー品のスマートTVを使い、出所不明なアプリのインストールを避けることが重要</li>
</ul>
<h2>欧州議会でスパイウェア問題を調査していた議員自身がPegasusで盗聴される</h2>
<ul>
<li>元欧州議会議員のStelios Kouloglou氏は、商用スパイウェアの乱用を調査する委員会に所属していた人物</li>
<li>調査団体Citizen Labのフォレンジック分析により、同氏の端末が委員会在籍中に繰り返しPegasusスパイウェアに感染していたことが判明</li>
<li>監視ツールを調査する立場の議員自身が、その監視ツールで狙われていたという皮肉な展開</li>
<li>商用スパイウェアの規制やEUの監視体制の議論に影響を与える可能性がある事例</li>
</ul>
<h2>フィッシング代行サービス「ARToken」がMicrosoft 365利用者の認証情報を狙う</h2>
<ul>
<li>Cisco Talosが、フィッシング・アズ・ア・サービス（PhaaS、犯罪者向けにフィッシング詐欺の道具一式を貸し出すサービス）「ARToken」を発見</li>
<li>既存のフィッシング組織「EvilTokens」の関連組織とみられ、同一のAPIリクエストやトークン管理方式を使用</li>
<li>「デバイスコードフィッシング」という手口で、被害者にMicrosoftの正規認証ページでコードを入力させ、多要素認証（MFA）を回避して認証トークンを窃取</li>
<li>主な標的は企業の経理部門で、正規ベンダーになりすました請求書メールが使われる</li>
<li>対策: メール認証の強化、行動分析による検知、身に覚えのない認証コード入力の求めに応じないこと</li>
</ul>
<h2>北朝鮮関連の攻撃者が偽npmパッケージで開発者の秘密情報を窃取</h2>
<ul>
<li>セキュリティ企業JFrogが、正規パッケージ「rollup-plugin-polyfill-node」になりすました悪意あるnpmパッケージ「rollup-packages-polyfill-core」「rollup-runtime-polyfill-core」を発見</li>
<li>パッケージの説明文やリポジトリ情報まで精巧に模倣し、開発者に本物と誤認させる手口</li>
<li>インストールするとリモートアクセスや秘密情報（APIキーなど）の窃取につながる</li>
<li>北朝鮮関連の攻撃者グループとの関連が指摘されている</li>
<li>開発者への対策: 依存パッケージ名やダウンロード数、公開元を必ず確認してからインストールすること</li>
</ul>
<h2>偽クリップボードアプリ「Maccy」を装うMac向け新型情報窃取ツール「PamStealer」</h2>
<ul>
<li>Jamf Threat Labsが、macOS向けの新しい情報窃取マルウェア「PamStealer」を発見</li>
<li>人気のオープンソースクリップボード管理アプリ「Maccy」になりすまし、コンパイル済みAppleScript（.scpt）ファイルとして配布される</li>
<li>macOSの認証の仕組み（PAM）に関するチェックを悪用する巧妙な手口を使用</li>
<li>感染するとログイン情報など機密情報が盗み出される</li>
<li>対策: アプリは必ず公式サイトやApp Storeなど正規の配布元からのみダウンロードすること</li>
</ul>
<h2>LinuxカーネルにAndroidも直撃する「Bad Epoll」脆弱性——一般ユーザー権限からroot奪取</h2>
<ul>
<li>新たに公表されたLinuxカーネルの欠陥「Bad Epoll」（CVE-2026-46242）は、特別な権限を持たない一般ユーザーがシステムの最高権限「root」を丸ごと奪取できる脆弱性</li>
<li>Linuxデスクトップ・サーバーに加え、Android端末も影響を受ける</li>
<li>修正パッチは既に公開済み</li>
<li>同じカーネルコード領域では、AnthropicのAIモデル「Mythos」が別の欠陥を発見していた経緯があり注目を集めている</li>
<li>対策: 各Linuxディストリビューションおよび自分のAndroid端末で、提供されている更新プログラムを速やかに適用すること</li>
</ul>
<h2>Check Point製品に認証回避の脆弱性——実際の攻撃で悪用を確認（CVE-2026-50751）</h2>
<ul>
<li>Check Point Software Technologies社のVPN製品（Security Gateways、Spark Firewalls）に、不適切な認証の脆弱性（CVE-2026-50751）が存在</li>
<li>VPN Remote AccessまたはMobile Accessが有効で、旧式の鍵交換プロトコル「IKEv1」を使い、レガシークライアントの接続を許可し、端末証明書（Machine Certificate）を必須にしていない構成が影響を受ける</li>
<li>悪用されると、遠隔の第三者が認証を回避して不正にリモートアクセスできる可能性</li>
<li>開発者は既に実際の攻撃を確認したと発表、JPCERT/CCとIPAも国内向けに注意喚起</li>
<li>対策: ホットフィックスの適用、IKEv2への移行、Machine Certificateの必須化、レガシークライアント接続の廃止</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security: FBI Seizes NetNut Proxy Platform, Popa Botnet
  https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/</li>
<li>The Hacker News: European Parliament Member Investigating Spyware Was Hacked With Pegasus
  https://thehackernews.com/2026/07/european-parliament-member.html</li>
<li>Bleeping Computer: ARToken PhaaS exposes EvilTokens' Microsoft 365 phishing toolkit
  https://www.bleepingcomputer.com/news/security/artoken-phaas-exposes-eviltokens-microsoft-365-phishing-toolkit/</li>
<li>The Hacker News: North Korea-Linked npm Packages Mimic Rollup Polyfills to Steal Developer Secrets
  https://thehackernews.com/2026/07/north-korea-linked-npm-packages-mimic.html</li>
<li>The Hacker News: PamStealer Uses Fake Maccy Sites and PAM Checks to Steal Mac Login Passwords
  https://thehackernews.com/2026/07/pamstealer-uses-fake-maccy-sites-and.html</li>
<li>The Hacker News: New "Bad Epoll" Linux Kernel Flaw Lets Unprivileged Users Gain Root, Hits Android
  https://thehackernews.com/2026/07/new-bad-epoll-linux-kernel-flaw-lets.html</li>
<li>JPCERT/CC: Check Point Software Technologies社製品における認証バイパスの脆弱性（CVE-2026-50751）に関する注意喚起
  https://www.jpcert.or.jp/at/2026/at260016.html</li>
<li>IPA: Check Point Software Technologies製品の脆弱性対策について(CVE-2026-50751)
  https://www.ipa.go.jp/security/security-alert/2026/alert20260610.html</li>
</ul>

</details>

---

[← 2026-07-04 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
