---
title: "Meta AIボット悪用でアカウント乗っ取り・FortiBleed流出 セキュリティニュース【2026/07/06】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# Meta AIボット悪用でアカウント乗っ取り・FortiBleed流出 セキュリティニュース【2026/07/06】

**2026-07-06 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-06-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-06-security)

---

## 概要

MetaのAIサポートボットを悪用してホワイトハウス・米宇宙軍のInstagramアカウントが乗っ取られた事件、194カ国・86,644台分のFortiGate機器のログイン情報が流出した「FortiBleed」、北朝鮮系ハッカーがnpmなど4つの配布網に108個の悪性パッケージを投稿した「PolinRider」キャンペーン、AI「Claude」を使った研究者が音楽フェスのチケットシステムの脆弱性を発見した事例、身近なGoogle ChromeやAdobe Acrobatの脆弱性、ハッキングツール「Flipper Zero」の開発体制変化など、今日のセキュリティニュース6本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・Meta AIサポートボットが悪用され、ホワイトハウス・米宇宙軍のInstagramアカウントが乗っ取られる
・Fortinet製FortiGate、86,644台分のログイン情報が194カ国分流出——「FortiBleed」
・北朝鮮系ハッカー、npmなど4つの配布網に108個の悪性パッケージ・拡張機能を投稿——「PolinRider」
・AI「Claude」を使った研究者が、米国の音楽フェス向けチケットシステムの脆弱性を発見
・Google Chromeに複数の脆弱性、Adobe Acrobat/Readerにも修正版——身近なソフトは早めの更新を
・ハッキングツール「Flipper Zero」、開発チーム縮小もコミュニティ主導で継続へ

▼ 参考記事・ソース
・Krebs on Security「Hackers Used Meta's AI Support Bot to Seize Instagram Accounts」
  https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/
・JPCERT/CC「Fortinet製品に関連する認証情報の漏えいに関する注意喚起」
  https://www.jpcert.or.jp/at/2026/at260019.html
・The Hacker News「North Korean Hackers Publish 108 Malicious Packages and Extensions in PolinRider Campaign」
  https://thehackernews.com/2026/07/north-korean-hackers-publish-108.html
・Wired「Claude Helped a Hacker Find a Way to Issue Tickets to Almost Every US Music Festival」
  https://www.wired.com/story/claude-helped-a-hacker-find-a-way-to-issue-tickets-to-almost-every-us-music-festival/
・JPCERT/CC「Weekly Report 2026-07-01」
  https://www.jpcert.or.jp/wr/2026/wr260701.html
・JPCERT/CC「Adobe AcrobatおよびReaderの脆弱性（APSB26-63）に関する注意喚起」
  https://www.jpcert.or.jp/at/2026/at260018.html
・Bleeping Computer「Flipper Zero firmware development continues with community help」
  https://www.bleepingcomputer.com/news/security/flipper-zero-firmware-development-continues-with-community-help/

#セキュリティ #サイバーセキュリティ #ランサムウェア #情報漏洩 #ゆっくり解説 #ずんだもん #ハッキング #脆弱性

---

<details>
<summary>スライド（クリックで展開）</summary>

<h2>Meta AIサポートボットが悪用され、ホワイトハウス・米宇宙軍のInstagramアカウントが乗っ取られる</h2>
<ul>
<li>親イラン系とみられるハッカー集団が、Instagramのパスワード再設定手続きでMetaの「AIサポートボット」とチャットし、ボットに新しいメールアドレスを追加させたうえで確認コードを送らせる手口をTelegramで公開した</li>
<li>対象者の出身地付近のVPNを使ってアクセスし、AIボットに次々と指示を出すだけでアカウントの持ち主を入れ替えられてしまう内容で、専門知識がなくても再現できてしまう手軽さが問題視されている</li>
<li>この手口で、オバマ政権時代の公式アカウントや米宇宙軍幹部の公式アカウント、さらには1個50万ドル以上の価値がある短い文字列のアカウントなど複数が乗っ取られ、一時的に親イラン系の画像やメッセージに書き換えられた</li>
<li>Meta広報は問題を解決し影響アカウントを保護したと発表。バックエンドのデータベース自体は侵害されていないが、SMSなど簡易な確認コードだけでは防げなかった事例で、セキュリティキーやパスキーの設定が有効な対策として挙げられている</li>
</ul>
<h2>Fortinet製FortiGate、86,644台分のログイン情報が194カ国分流出——「FortiBleed」</h2>
<ul>
<li>セキュリティベンダーSOCRadarが、攻撃者が運用するデータベースの中に194カ国、86,644台以上のFortiGate機器のログイン情報が含まれていることを確認したと公表した</li>
<li>主因は過去の侵害で取得された認証情報の使い回しとみられるが、一部は現在も有効な可能性があり、機器の設定ファイルから管理者パスワードのハッシュを解析されるリスクも指摘されている</li>
<li>JPCERT/CCが国内利用組織向けに注意喚起（JPCERT-AT-2026-0019）を発出。認証情報のローテーションと多要素認証の有効化、不正アクセス痕跡の調査を緊急対応として求めている</li>
<li>長期的な対策として、FortiOSをより安全なパスワード保存方式（PBKDF2）に対応したファームウェアへ更新すること、意図しないアカウントの追加や社内Active Directory環境の不審な動きがないかの確認も呼びかけられている</li>
</ul>
<h2>北朝鮮系ハッカー、npmなど4つの配布網に108個の悪性パッケージ・拡張機能を投稿——「PolinRider」</h2>
<ul>
<li>北朝鮮とつながりがあるとされる「Contagious Interview」系の攻撃者が、npm・Packagist・Go・Google Chrome拡張機能という4つのエコシステムにまたがり、108個の悪意あるパッケージ・拡張機能を公開していたことが判明した</li>
<li>これらは正規のツールになりすまして開発者に取り込ませ、開発環境から認証情報などの機密情報を盗み出す目的で作られていた</li>
<li>攻撃者は開発者アカウントの乗っ取りを繰り返しており、キャンペーンは現在も継続中。新たな悪性パッケージが今後も次々と見つかる可能性が高いとされ、ソフトウェア開発者は依存パッケージの出所を都度確認する必要がある</li>
</ul>
<h2>AI「Claude」を使った研究者が、米国の音楽フェス向けチケットシステムの脆弱性を発見</h2>
<ul>
<li>ある研究者が、AnthropicのAI「Claude Opus」を使いながら、ロラパルーザやボナルーなど全米の主要音楽フェスで使われるチケット販売システム「Front Gate」を調査した</li>
<li>その過程で同サイトに侵入し、任意のチケットを自由に発行できてしまう脆弱性を発見したと報告されている。転売価格が高騰しがちな人気フェスのチケットでも、不正に発行され放題になる恐れがあった内容</li>
<li>AIがハッキングの補助ツールとして一般の研究者にも使われるようになったことを示す事例で、チケット販売のような身近なサービスもAI時代のセキュリティ検証の対象になっていることが分かる</li>
</ul>
<h2>Google Chromeに複数の脆弱性、Adobe Acrobat/Readerにも修正版——身近なソフトは早めの更新を</h2>
<ul>
<li>JPCERT/CCの週次レポートで、多くの人が日常的に使うGoogle Chromeに複数の脆弱性があることが報告され、修正済みバージョンへの更新が呼びかけられている</li>
<li>Adobe Acrobat・Readerについても脆弱性（APSB26-63）が公表されており、悪用された場合は細工したPDFファイルを開くだけで任意のコードを実行される恐れがある</li>
<li>どちらも普段パソコンで頻繁に使うソフトのため、自動更新の設定を確認し、通知が来たら後回しにせず適用することが推奨される。ブラウザやPDF閲覧ソフトは「毎日開くのに軽視されがち」なソフトの代表格でもある</li>
</ul>
<h2>ハッキングツール「Flipper Zero」、開発チーム縮小もコミュニティ主導で継続へ</h2>
<ul>
<li>RFID/NFCカードの解析や電波機器のテストなどに使われる携帯型ツール「Flipper Zero」を手がけるFlipper Devices社が、社内の開発チームを縮小しつつ、ファームウェア開発自体は継続すると発表した</li>
<li>今後はコミュニティからの貢献への依存度を高める方針で、有志の開発者が機能追加や修正に関わる場面が増える見通し</li>
<li>手軽に電子錠やカードの脆弱性を検証できることから研究者・愛好家に広く使われている一方、一部店舗や交通機関ではカード複製への懸念から警戒対象にもなっているツールで、開発体制の変化は利用者コミュニティにとっても注目点となっている</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/</li>
<li>https://www.jpcert.or.jp/at/2026/at260019.html</li>
<li>https://thehackernews.com/2026/07/north-korean-hackers-publish-108.html</li>
<li>https://www.wired.com/story/claude-helped-a-hacker-find-a-way-to-issue-tickets-to-almost-every-us-music-festival/</li>
<li>https://www.jpcert.or.jp/wr/2026/wr260701.html</li>
<li>https://www.jpcert.or.jp/at/2026/at260018.html</li>
<li>https://www.bleepingcomputer.com/news/security/flipper-zero-firmware-development-continues-with-community-help/</li>
</ul>

</details>

---

[← 2026-07-06 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
