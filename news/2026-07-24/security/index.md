---
title: "Zimbraゼロデイ盗聴から車載アラームKARRまで！今日のセキュリティ7選【2026/07/24】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# Zimbraゼロデイ盗聴から車載アラームKARRまで！今日のセキュリティ7選【2026/07/24】

**2026-07-24 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-24-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-24-security)

---

## 概要

「本人が操作していないのに被害が始まる」を軸に、今日のセキュリティニュース7本をずんだもんと四国めたんが解説します。Zimbraのゼロクリック攻撃、Origin Energyの情報漏洩、Claude CoworkのVM脱出欠陥、9年物のLinuxカーネル欠陥RefluxFS、車載アラームKARR、LGスマートTVの踏み台化アプリ、Windows 10サポート終了の注意喚起まで、事実・背景・今すぐ確認すべき点の順に整理します。

▼ 今日のトピック
・ロシアのハッキング集団がZimbraのゼロデイでメールと2要素認証コードを盗んだ
・Origin Energyが情報漏洩を公表、480万顧客のうち氏名・住所・口座情報が対象
・Claude CoworkにVM脱出の欠陥「SharedRoot」、約50万人が影響対象
・9年前から存在したLinuxカーネルの欠陥「RefluxFS」をAIとの共同研究で発見
・ディーラーが黙って取り付けた車載アラーム「KARR」に脆弱性、200万台以上が対象
・LGがスマートTVの「勝手に踏み台化」アプリを禁止へ
・Windows 10サポート終了、注意喚起がおよそ9か月経った今も更新中

▼ 参考記事・ソース
・The Hacker News「Russian Espionage Group Exploited Zimbra Zero-Day to Steal Mail and 2FA Codes」: https://thehackernews.com/2026/07/russian-espionage-group-exploited.html
・Bleeping Computer「Russian hackers exploit Zimbra zero-click flaw for email theft」: https://www.bleepingcomputer.com/news/security/russian-hackers-exploit-zimbra-zero-click-flaw-for-email-theft/
・Bleeping Computer「Australian energy provider Origin says data breach exposes client data」: https://www.bleepingcomputer.com/news/security/australian-energy-provider-origin-says-data-breach-exposes-client-data/
・The Hacker News「Claude Cowork Flaw Could Let AI Agent Escape Its VM and Access Mac Files」: https://thehackernews.com/2026/07/claude-cowork-flaw-could-let-ai-agent.html
・Bleeping Computer「New RefluXFS Linux flaw lets attackers gain root privileges」: https://www.bleepingcomputer.com/news/linux/new-refluxfs-linux-flaw-lets-attackers-gain-root-privileges/
・Wired「A Device Hidden in Cars Across the US Leaves Them Vulnerable to Hacking and Paralysis. Patch It Now」: https://www.wired.com/story/a-device-hidden-in-cars-across-the-us-leaves-them-vulnerable-to-hacking-and-paralysis-patch-it-now/
・Krebs on Security「LG to Ban Residential Proxies from Smart TV Apps」: https://krebsonsecurity.com/2026/07/lg-to-ban-residential-proxies-from-smart-tv-apps/
・IPA「Windows 10のサポート終了に伴う注意喚起」: https://www.ipa.go.jp/security/security-alert/2024/win10_eos.html

#Zimbra #OriginEnergy #ClaudeCowork #RefluxFS #KARR #LGスマートTV #Windows10サポート終了 #セキュリティ #サイバーセキュリティ #ゆっくり解説 #ずんだもん #四国めたん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>ゼロクリックのメール窃盗から車の隠しアラームまで――「見えない経路」が狙われた一週間（2026年7月24日）</h1>
<h2>オープニング：2026年7月24日 — セキュリティニュース</h2>
<p><strong>キーワード:</strong> Zimbraゼロデイ / Origin Energy情報漏洩 / Claude Coworkサンドボックス脱出 / RefluxFS特権昇格 / KARR車載アラーム / Windows 10サポート終了</p>
<p>今日の7本に共通するのは「本人が操作していないのに被害が始まる」という経路だ。メールを開いただけ、ディーラーで車を買っただけ、無料アプリを入れただけ、AIエージェントに作業を任せただけ――利用者が意識的にリスクを取ったわけではない場面で、情報が抜かれたり、遠隔操作の余地が生まれたりしている。</p>
<p>だからこそ「怪しい操作をしない」だけでは足りない。パッチが出ているか、初期設定のまま放置していないか、契約時に断ったはずの機能が実は生きていないか。今日はそこまで踏み込んで確認する。</p>
<h2>ロシアの諜報グループがZimbraのゼロデイでメールと2要素認証コードを盗んだ</h2>
<ul>
<li>NSA・CISAと各国のパートナー機関が共同で勧告を出し、ロシア国家が支援するとみられるハッキンググループ「Laundry Bear（別名Void Blizzard）」が、メールサーバーソフト「Zimbra」の未修正だった脆弱性を悪用し、西側組織のメールボックスを数か月にわたって読み続けていたと公表した。</li>
<li>攻撃は「ゼロクリック」型で、悪意あるメールを開封するだけで実行される。盗まれるのは直近90日分のメール、組織全体のメールアドレス帳、ブラウザに保存されたパスワード、そして2要素認証の復旧コードだ。</li>
<li>脆弱性はすでに修正版が提供されている。Zimbraを使う組織はまずサーバーの更新を確認し、次にブラウザ保存パスワードの一括削除・再設定、2要素認証の復旧コードの再発行、直近90日のメール送受信ログの不審な転送設定チェックを行うべきだ。</li>
</ul>
<h2>Origin Energyが情報漏洩を公表——480万顧客のうち氏名・住所・口座情報が対象に</h2>
<ul>
<li>オーストラリア最大級のエネルギー小売企業Origin Energy（顧客数480万、年間売上85億ドル）が、何者かに不正アクセスされ顧客データが流出したことを公表した。攻撃者側は「200万人分のデータを保持している」と主張しているが、同社は影響を受けた人数をまだ確定できていない。</li>
<li>流出したとされるのは氏名、住所、生年月日、電話番号、口座情報、クレジットカード番号下4桁、銀行口座番号下3桁。同社は「金融情報は不完全で、口座乗っ取りや不正請求には使えない」と説明しているが、攻撃者は2週間以内にデータを公開すると脅迫している。</li>
<li>Origin Energyはオーストラリア連邦警察に通報済みで、影響を受けた顧客への個別連絡と専用サポート窓口の設置を進めている。日本の利用者でも、公共料金・保険など生活インフラ企業からの情報漏洩は珍しくない。契約している企業からの「情報漏洩のお知らせ」を装ったフィッシングメールには特に注意してほしい。</li>
</ul>
<h2>AnthropicのAIエージェント「Claude Cowork」にVM脱出の欠陥——約50万人が影響対象</h2>
<ul>
<li>セキュリティ企業Accomplish AIの研究者Oren Yomtov氏らが、Anthropicのデスクトップ向けAIエージェント「Claude Cowork」に「SharedRoot」と名付けたサンドボックス脱出の欠陥を発見した。Cowork はmacOS上でLinux仮想マシン（VM）を使ってタスクを実行する仕組みだが、そのVMにホストMacのファイルシステム全体が読み書き可能な状態でマウントされていた。</li>
<li>別に見つかったLinuxカーネルの脆弱性CVE-2026-46331を組み合わせるとVM内でroot権限を取得でき、そこからホストMac側の任意のファイルを読み書きできてしまう。パッチが出る前にローカルでCoworkセッションを実行していた約50万人のmacOSユーザーが対象だったとされる。</li>
<li>Anthropicはこの報告を「参考情報」扱いとして修正なしでクローズしたが、最新版はデフォルトでクラウド実行に切り替わっており、通常利用ではこの問題を回避できる。ただし手元のMacでローカル実行を選んでいるユーザーは今も脆弱なままなので、設定を確認しクラウド実行に切り替えることを勧める。</li>
</ul>
<h2>9年前から存在したLinuxカーネルの欠陥「RefluxFS」——AIとの共同研究で発見</h2>
<ul>
<li>セキュリティ企業Qualys Threat Research Unitが、Linuxカーネルのファイルシステム機能「XFS」に9年前から存在していたレース条件（処理の順序が入れ替わることで起きる不具合）の脆弱性を発見し、「RefluxFS」(CVE-2026-64600)と名付けて報告した。悪用されるとroot以外の一般ユーザーがroot所有の設定ファイルやSUID-rootバイナリを書き換え、管理者権限を奪える。</li>
<li>対象はRed Hat Enterprise Linux、Oracle Linux、Amazon Linux、Fedora、CentOS Stream、Rocky Linux、AlmaLinux、CloudLinuxなど主要な企業向けLinuxディストリビューション。悪用にはXFSの「reflink」機能が有効になっていることと、一般ユーザーが書き込めるディレクトリの存在が条件になる。Qualysは今回、AnthropicのClaudeを使った共同研究でこの欠陥を特定したとしている。</li>
<li>7月16日にベンダー修正済みカーネルがマージされ、各企業向けディストリビューションへの配布が進んでいる。現時点で実際の悪用は確認されていないが、Qualysは「悪用の再現性は非常に高い」と警告している。該当ディストリビューションを使うシステム管理者は優先度を上げてカーネル更新を適用すべきだ。</li>
</ul>
<h2>ディーラーが黙って取り付けた車載アラーム「KARR」に脆弱性——200万台以上が対象</h2>
<ul>
<li>カリフォルニア大学サンディエゴ校（UCSD）の研究者が、Honda・Toyota・Mazda・Ford・Jeepなどのディーラーが盗難防止用に取り付けているBluetooth対応の車載アラーム「KARR」（製造元Acrisure Protection Group）に脆弱性を発見した。すべてのKARR機器が単一の共通認証キーを使っていたため、そのキーを知る攻撃者は対象車のBluetooth範囲内にいるだけで解錠・エンジン停止・ホーンやライトの遠隔操作ができてしまう。</li>
<li>さらに厄介なのは、購入者が「アラーム機能は不要」と断った場合でも、ディーラーは機器を車体に配線したまま「無効化した」状態で残していたことだ。対象は200万台以上に上り、そのうち約半数の所有者は装着を望んでおらず、車に付いていること自体を知らない可能性がある。Bluetoothビーコンは車の位置追跡にも使われ得る。</li>
<li>UCSDはメーカーに警告し、メーカー側は修正パッチをすでに公開している。ディーラーでアラームを追加された記憶がある人、または中古車を購入した人は、販売店やメーカーにKARR機器の有無とパッチ適用状況を確認してほしい。</li>
</ul>
<h2>LGがスマートTVの「勝手に踏み台化」アプリを禁止へ</h2>
<ul>
<li>家電大手LG Electronics USAは今週、自社スマートTV向けアプリのうち、テレビを常時稼働の「住宅用プロキシ」の踏み台に変えるアプリの配信を停止すると発表した。背景には、LGのwebOSストアで配信されているゲームなどのアプリのうち42%超が、持ち主の同意や認識のないまま第三者の通信をテレビ経由で中継できる状態だったという研究者の指摘がある。</li>
<li>「住宅用プロキシ」とは、一般家庭の回線を経由することで攻撃者や業者が身元を隠して通信できる仕組みで、広告詐欺やアカウント乗っ取り、大量スクレイピングなどの悪用に使われる。テレビの持ち主は自分の回線が犯罪行為の踏み台にされていても気づきにくい。</li>
<li>LGは該当アプリの配信停止を進める方針だが、すでにインストール済みのアプリは利用者側での対応が必要になる可能性が高い。スマートTVで無料ゲームアプリを入れている場合は、使っていないアプリを削除し、テレビの設定でアプリの通信許可・広告許可を見直すことを勧める。</li>
</ul>
<h2>Windows 10のサポート終了、注意喚起がおよそ9か月経った今も更新中</h2>
<ul>
<li>IPA（情報処理推進機構）は「Windows 10のサポート終了に伴う注意喚起」ページを6月26日に改めて更新した。Windows 10のサポートは2025年10月14日（米国時間）に終了しており、今後発見される脆弱性に対してセキュリティ更新プログラムは提供されない。</li>
<li>IPAは、パッチが出ない状態で使い続けると情報漏洩や意図しないサービス停止のリスクが高まるとし、Windows 10上で動くサードパーティ製ソフトも今後サポート終了とセキュリティリスクにさらされていくと注意を呼びかけている。マイクロソフトは移行の橋渡しとして最長1年の有償延長サポート「ESU」を提供しているが、根本的な解決策はサポート対象OSへの移行だとしている。</li>
<li>サポート終了から9か月以上経っても注意喚起が更新され続けているのは、それだけ移行が済んでいないパソコンが多いことの表れでもある。自宅や職場のPCがまだWindows 10のままなら、ESUへの加入かWindows 11への移行を今のうちに検討してほしい。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>今日の7本は、メールを開く、車を買う、アプリを入れる、AIに作業を任せる、古いOSを使い続けるといった「特別に危険とは思えない場面」に潜むリスクを扱った。</li>
<li>対策の共通項は「パッチの有無」と「初期設定・契約内容の確認」に尽きる。Zimbraやカーネルのように修正版が出ているものは適用状況を、Claude CoworkやKARRのように設定・契約次第で影響範囲が変わるものは自分の設定を、それぞれ今日中に確認してほしい。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>The Hacker News「Russian Espionage Group Exploited Zimbra Zero-Day to Steal Mail and 2FA Codes」 https://thehackernews.com/2026/07/russian-espionage-group-exploited.html</li>
<li>Bleeping Computer「Russian hackers exploit Zimbra zero-click flaw for email theft」 https://www.bleepingcomputer.com/news/security/russian-hackers-exploit-zimbra-zero-click-flaw-for-email-theft/</li>
<li>Bleeping Computer「Australian energy provider Origin says data breach exposes client data」 https://www.bleepingcomputer.com/news/security/australian-energy-provider-origin-says-data-breach-exposes-client-data/</li>
<li>The Hacker News「Claude Cowork Flaw Could Let AI Agent Escape Its VM and Access Mac Files」 https://thehackernews.com/2026/07/claude-cowork-flaw-could-let-ai-agent.html</li>
<li>Bleeping Computer「New RefluXFS Linux flaw lets attackers gain root privileges」 https://www.bleepingcomputer.com/news/linux/new-refluxfs-linux-flaw-lets-attackers-gain-root-privileges/</li>
<li>Wired「A Device Hidden in Cars Across the US Leaves Them Vulnerable to Hacking and Paralysis. Patch It Now」 https://www.wired.com/story/a-device-hidden-in-cars-across-the-us-leaves-them-vulnerable-to-hacking-and-paralysis-patch-it-now/</li>
<li>Krebs on Security「LG to Ban Residential Proxies from Smart TV Apps」 https://krebsonsecurity.com/2026/07/lg-to-ban-residential-proxies-from-smart-tv-apps/</li>
<li>IPA「Windows 10のサポート終了に伴う注意喚起」 https://www.ipa.go.jp/security/security-alert/2024/win10_eos.html</li>
</ul>

</details>

---

[← 2026-07-24 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
