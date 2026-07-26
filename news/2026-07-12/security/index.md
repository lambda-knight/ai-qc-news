---
title: "Fortinetファイアウォール8万台認証情報流出・画像に隠れたAI攻撃指令「Ghostcommit」 セキュリティニュース【2026/07/12】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# Fortinetファイアウォール8万台認証情報流出・画像に隠れたAI攻撃指令「Ghostcommit」 セキュリティニュース【2026/07/12】

**2026-07-12 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-12-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-12-security)

---

## 概要

企業向けファイアウォール「FortiGate」など86,644台の認証情報が194カ国で流出した「FortiBleed」、220万台の家庭用テレビボックスを操っていたボットネットをFBIが摘発した事件、人気ライブラリ「jscrambler」がnpmで乗っ取られインストールだけでウイルス感染する事件、PNG画像にAIへの指令を隠してAIコーディングエージェントを操る新手法「Ghostcommit」、MetaのAIサポートボットを騙してホワイトハウスなど要人のInstagramが乗っ取られた事件、ロンドン交通網を止めたハッカー集団「Scattered Spider」の裁判初日での有罪答弁、ペガサススパイウェアを調査していたEU議員自身が感染していた事件、服役中に押収済み暗号資産29万ドル分を盗んだ疑いで起訴された事件まで、今日のセキュリティニュース8本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・Fortinet製ファイアウォールの認証情報が大量流出「FortiBleed」
・FBIが220万台の家庭用テレビボックスを操るボットネットの司令塔を摘発
・人気ツール「jscrambler」がnpmで乗っ取られ、インストールしただけでウイルス感染
・画像に隠したAIへの指令で秘密情報を盗ませる新手口「Ghostcommit」
・MetaのAIサポートを騙してパスワードリセット、要人アカウントが乗っ取り被害に
・ロンドン交通網を止めたハッカー集団「Scattered Spider」、裁判初日で罪を認める
・スパイウェア「ペガサス」を調査していたEU議員、自分のスマホが感染していたと判明
・服役中の男が、押収済みの暗号資産29万ドル分を盗んだ疑いで新たに起訴

▼ 参考記事・ソース
・JPCERT/CC「Fortinet製品に関連する認証情報の漏えいに関する注意喚起」
  https://www.jpcert.or.jp/at/2026/at260019.html
・Krebs on Security「FBI Seizes NetNut Proxy Platform, Popa Botnet」
  https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/
・Krebs on Security「'Popa' Botnet Linked to Publicly-Traded Israeli Firm」
  https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/
・The Hacker News「Compromised jscrambler 8.14.0 npm Release Drops Rust Infostealer During Install」
  https://thehackernews.com/2026/07/compromised-jscrambler-8140-npm-release.html
・Bleeping Computer「'Ghostcommit' hides prompt injection in images to fool AI agents, steal secrets」
  https://www.bleepingcomputer.com/news/security/ghostcommit-hides-prompt-injection-in-images-to-fool-ai-agents-steal-secrets/
・Krebs on Security「Hackers Used Meta's AI Support Bot to Seize Instagram Accounts」
  https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/
・Krebs on Security「Scattered Spider Hackers Plead Guilty on Day 1 of Trial」
  https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/
・Wired「EU Politicians Investigated Pegasus Spyware. Then It Ended Up on One of Their Phones」
  https://www.wired.com/story/eu-politicians-investigated-pegasus-spyware-then-it-ended-up-on-one-of-their-phones/
・Bleeping Computer「Money launderer accused of stealing seized crypto while in prison」
  https://www.bleepingcomputer.com/news/security/money-launderer-accused-of-stealing-seized-crypto-while-in-prison/

#セキュリティ #サイバー攻撃 #情報セキュリティ #ゆっくり解説 #ずんだもん #ランサムウェア #脆弱性

---

<details>
<summary>スライド（クリックで展開）</summary>

<h2>Fortinet製ファイアウォールの認証情報が大量流出「FortiBleed」</h2>
<ul>
<li>海外セキュリティ企業SOCRadarの調査により、Fortinet社の企業向けファイアウォール「FortiGate」などに関連する認証情報（ログインIDとパスワード）が大量に流出していたことが判明した。通称「FortiBleed」と呼ばれている。</li>
<li>影響は194の国と地域におよび、企業や政府機関が使う86,644台以上の機器のログイン情報が、攻撃者が運用するデータベースに含まれていたことが確認された。ファイアウォールは社内ネットワークを外部の攻撃から守る「門番」機器であり、この鍵が漏れると正面から侵入を許すおそれがある。</li>
<li>国内でもJPCERT/CCが注意喚起を発表。FortiGateなどを利用している組織は、パスワードの変更や多要素認証の導入など、認証情報の見直しを急ぐ必要がある。</li>
</ul>
<h2>FBIが220万台の家庭用テレビボックスを操るボットネットの司令塔を摘発</h2>
<ul>
<li>FBIが、業界パートナーと協力し「NetNut」という住宅用プロキシサービス（一般家庭のネット回線を経由して通信を匿名化する仕組み）に関連する数百のドメインを差し押さえた。運営元はイスラエルの上場企業Alarum Technologies。</li>
<li>NetNutは、少なくとも200万台の家庭用Android系テレビボックスに感染したボットネット「Popa」とつながっていたことが、複数のセキュリティ企業の調査で判明していた。持ち主の同意なく通信を中継させられ、広告詐欺やアカウント乗っ取り、大規模なデータ収集に悪用されていたという。</li>
<li>安価な海外製ストリーミングTVボックスを使っている家庭は、知らぬ間に自分の回線が犯罪の踏み台にされている可能性がある。心当たりがある人は、ファームウェアの出所や通信量を確認しておきたい。</li>
</ul>
<h2>人気ツール「jscrambler」がnpmで乗っ取られ、インストールしただけでウイルス感染</h2>
<ul>
<li>ソフトウェア開発者向けの人気ライブラリ「jscrambler」の配布パッケージ（npm）が何者かに乗っ取られ、2026年7月11日公開のバージョン8.14.0にウイルス（情報を盗み出す「インフォスティーラー」型マルウェア）が仕込まれた。</li>
<li>インストール時に自動実行される仕込みにより、Windows・Mac・Linuxそれぞれ専用の不正プログラムが密かに実行される仕組みだった。npmは、プログラムの部品（パッケージ）を配布・共有する仕組みで、多くのアプリやウェブサイトが依存しているため、一つが汚染されると被害が連鎖的に広がりやすい。</li>
<li>セキュリティ企業Socketが公開からわずか6分でこの異常を検知して警告したため、被害拡大は限定的とみられる。とはいえ、自分では意識していないアプリの裏側でこうした部品が使われていることが多く、開発者以外にも影響が及びうる事例。</li>
</ul>
<h2>画像に隠したAIへの指令で秘密情報を盗ませる新手口「Ghostcommit」</h2>
<ul>
<li>研究者が、1枚のPNG画像の中に「AIへの指令」を隠す新手法「Ghostcommit」を実証した。文字だけでなく画像そのものが攻撃の道具になるという新しいタイプの脅威。</li>
<li>AIによるコードレビューツール「CodeRabbit」や「Bugbot」は画像ファイルの中身を開いて確認しないため、この仕込みをそのまま素通りさせてしまう。</li>
<li>ところがプログラム作成を代行するAIエージェントはその画像内の指示に従ってしまい、開発中のプロジェクトの秘密情報（パスワードやアクセスキーが書かれた設定ファイル）を読み取り、数字の羅列に変換してコードの中に書き出してしまった。AIを使った開発が広がる中、「画像1枚」が情報漏えいの入口になりうることを示した実例。</li>
</ul>
<h2>MetaのAIサポートを騙してパスワードリセット、要人アカウントが乗っ取り被害に</h2>
<ul>
<li>オバマ政権時代のホワイトハウス公式Instagramアカウントと、米宇宙軍の最高位下士官のアカウントが週末に一時的に乗っ取られ、親イラン派の画像やメッセージに書き換えられた。</li>
<li>原因は、Meta社の「AIサポートボット」（問い合わせ対応を自動化するAI）をうまく話しかけて騙し、本人になりすましてパスワードをリセットさせる手口。この方法の具体的な手順がTelegram上で出回っていたことが発覚のきっかけとなった。</li>
<li>本来なら人間の担当者が本人確認をするはずの窓口を、AIが騙されて通過させてしまった格好。有名アカウントに限らず、AIによる自動サポート窓口を導入しているサービス全般に同様の穴が潜んでいる可能性があり、パスワード変更時は必ず二段階認証も併せて設定しておきたい。</li>
</ul>
<h2>ロンドン交通網を止めたハッカー集団「Scattered Spider」、裁判初日で罪を認める</h2>
<ul>
<li>2024年8月にロンドンの公共交通機関を運営するTransport for London（ロンドン交通局）を機能停止に追い込んだサイバー攻撃をめぐり、英国の男2人が今週、罪を認めた。6週間を予定していた裁判は、初日の有罪答弁で事実上決着した。</li>
<li>2人は「Scattered Spider」というハッカー集団の中心メンバー。この集団は英語ネイティブの若い世代が中心で、電話や対人心理戦（ソーシャルエンジニアリング、人の心理的な隙を突いて情報を聞き出す手口）を使った侵入を得意とし、過去にはカジノやアパレル大手も標的にしてきた。</li>
<li>公共交通機関という社会インフラも標的になりうる時代であること、そして攻撃者が必ずしも「凄腕プログラマー」ではなく、電話一本で人を巧みに騙す若者たちだったという点が示唆に富む事件。</li>
</ul>
<h2>スパイウェア「ペガサス」を調査していたEU議員、自分のスマホが感染していたと判明</h2>
<ul>
<li>「ペガサス」はイスラエル企業NSOグループが開発した、スマホを遠隔操作してメッセージや通話を盗み見できるスパイウェア（潜入型の監視ソフト）。各国政府がジャーナリストや反体制派、政治家の監視に使ってきたとされ、国際的に問題視されている。</li>
<li>欧州議会でこの問題を調査していた議員自身のスマホから、調査対象であるはずのペガサスの感染痕跡が、人権団体Citizen Labの調査により見つかった。</li>
<li>「法の支配そのものへの直接攻撃だ」と当該議員は強く非難している。一般利用者が直接狙われる可能性は低いが、政治家やジャーナリストなど「都合の悪い人物」を狙う監視ソフトが今も現役で使われている実例として重い意味を持つ。</li>
</ul>
<h2>服役中の男が、押収済みの暗号資産29万ドル分を盗んだ疑いで新たに起訴</h2>
<ul>
<li>ブルガリア国籍の男が、米国の詐欺被害者から盗まれた数百万ドルのマネーロンダリング（資金洗浄、犯罪で得たお金の出どころを分からなくする行為）に関与した罪で懲役121か月（約10年）を言い渡され服役中だった。</li>
<li>その服役中に、政府がすでに押収していた29万ドル（日本円で約4500万円）相当の暗号資産を何らかの方法で盗み出した疑いがあるとして、新たに起訴された。</li>
<li>暗号資産は「デジタルの財布の鍵（秘密鍵）」さえ分かれば、物理的に隔離された場所からでも移動できてしまう性質がある。押収された「証拠品」ですら安全に保管するのが難しいほど、暗号資産の管理には特殊な注意が必要であることを示す事件。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>https://www.jpcert.or.jp/at/2026/at260019.html</li>
<li>https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/</li>
<li>https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/</li>
<li>https://thehackernews.com/2026/07/compromised-jscrambler-8140-npm-release.html</li>
<li>https://www.bleepingcomputer.com/news/security/ghostcommit-hides-prompt-injection-in-images-to-fool-ai-agents-steal-secrets/</li>
<li>https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/</li>
<li>https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/</li>
<li>https://www.wired.com/story/eu-politicians-investigated-pegasus-spyware-then-it-ended-up-on-one-of-their-phones/</li>
<li>https://www.bleepingcomputer.com/news/security/money-launderer-accused-of-stealing-seized-crypto-while-in-prison/</li>
</ul>

</details>

---

[← 2026-07-12 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
