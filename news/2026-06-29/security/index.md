---
title: "セキュリティニュース 2026-06-29"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-29

**2026-06-29 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-29-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-29-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026-06-29</h1>
<h2>Microsoft史上最多パッチチューズデー——200本近い脆弱性を一括修正</h2>
<ul>
<li>Microsoftが6月のパッチチューズデー（月例セキュリティ更新）で約200件の脆弱性を修正した。これは同社の月例パッチとして史上最多の件数であり、そのうち30本以上が「重大（Critical）」評価を受けた</li>
<li>少なくとも3件の脆弱性については攻撃に使えるエクスプロイトコード（悪用プログラム）がすでに公開されており、実際の攻撃に先立って迅速なパッチ適用が不可欠な状況だ</li>
<li>WindowsやEdge、Officeを含む広範な製品が対象であり、特にリモートコード実行（RCE＝遠隔からコードを実行できる脆弱性）系のバグが多く含まれているため、企業・個人ともに即時更新が強く推奨される</li>
</ul>
<h2>オランダ当局、800台のサーバーを押収——ロシアのサイバー攻撃を支援した2人を逮捕</h2>
<ul>
<li>オランダ警察が、ロシアの諜報機関によるサイバー攻撃・影響工作・偽情報拡散を支援していたとして、2つのインターネットホスティング企業の共同経営者2人を逮捕し、800台以上のサーバーを押収した</li>
<li>逮捕された2人が運営する企業は、EUからロシア諜報機関の活動拠点として制裁を受けていたホスティング企業「Stark Industries Solutions」のインフラを引き継いでいたことが判明。ロシアのサイバー工作の中継基盤が欧州に存在していたことが改めて浮き彫りになった</li>
<li>今回の摘発はEU内のサイバー犯罪インフラ解体に向けた国際連携の成果であり、ロシア起点の攻撃を支援するインフラ事業者への法的追及が欧州全体で強化されていることを示している</li>
</ul>
<h2>KimwolfボットネットのボスDort容疑者を米加で起訴——IoT機器を数百万台乗っ取りDDoS攻撃</h2>
<ul>
<li>カナダ・オタワ在住の23歳の男性が、数百万台のIoT機器（インターネット接続された家電・ルーターなど）を乗っ取って作った「Kimwolf」ボットネットを構築・運営した疑いでカナダ当局に逮捕された</li>
<li>Kimwolfは過去6ヶ月で複数の大規模DDoS攻撃（大量の通信を送りつけサービスを不能にする攻撃）を実行しており、容疑者はセキュリティ研究者や取材記者に対してDDoS攻撃・個人情報暴露（ドクシング）・警察への虚偽通報（スワッティング）を仕掛けたとされる</li>
<li>容疑者は米国・カナダ双方でハッキング関連の刑事訴追に直面しており、IoTボットネットの運営者への法的追及が国際的に加速している証左となった</li>
</ul>
<h2>ロシア諜報機関がSignalのバックアップ回復キーを狙うフィッシング——FBI/CISAが緊急警告</h2>
<ul>
<li>FBIとCISAが、ロシア諜報機関と関連するフィッシング（偽メール・偽サイトで情報を騙し取る手口）キャンペーンが進化したと警告を更新。攻撃者は標的を誘導して「Signalのバックアップ回復キー」を渡させる新たな手口を追加した</li>
<li>バックアップ回復キーを一度渡すと、攻撃者はSignalアカウントのバックアップを復元でき、過去の全メッセージ履歴を閲覧しアカウントを乗っ取ることができる。さらにこのキーは失効させることが困難で、被害が長引く恐れがある</li>
<li>ウクライナ・欧州・米国の政府職員、軍関係者、活動家が主な標的とされており、Signalの「リンクデバイス」設定で不審な端末を定期確認し、回復キーを絶対に他者に渡さないことが防御の要点だ</li>
</ul>
<h2>KDDIのメールシステムが侵害——6つのISPで最大1420万件のメールログインが流出</h2>
<ul>
<li>日本の大手通信会社KDDIが運営するメールシステムが不正アクセスを受け、同システムを共同利用していた5つのISP（インターネットサービスプロバイダー）を合わせた最大1420万件のメールアカウントのログイン情報（メールアドレスとパスワード）が流出した</li>
<li>攻撃者はKDDIの基盤メールシステムに侵入することで、系列・提携ISP全体のユーザーデータを一括して窃取したとみられており、単一拠点の侵害が複数事業者に連鎖する「共有インフラのリスク」が改めて問題となっている</li>
<li>該当するISPのユーザーはメールパスワードの即時変更と、同じパスワードを他サービスで使い回していた場合はそちらも変更するよう強く推奨される</li>
</ul>
<h2>Polymarketで3億円超の被害——サプライチェーン攻撃でフロントエンドに悪意スクリプト</h2>
<ul>
<li>予測市場プラットフォーム「Polymarket」が、サードパーティベンダー（外部委託先）への不正侵入を起点としたサプライチェーン攻撃を受け、攻撃者がPolymarketのウェブサイト（フロントエンド）に悪意あるスクリプトを埋め込んだ。被害額は推定約300万ドル（約3億円）に上る</li>
<li>サプライチェーン攻撃（supply chain attack）とは、攻撃対象の企業を直接狙わず、その企業が利用する外部ベンダーや部品供給者を先に侵害してから、正規のサービスに悪意あるコードを混入させる手法だ</li>
<li>Polymarketは被害を受けたユーザーへの全額補償を表明しており、Webサービス利用者は外部依存のコードが混入するリスクへの意識と、ウォレット接続・トランザクション承認時の慎重な確認が引き続き必要だ</li>
</ul>
<h2>Amazon Q Developerの高深刻度脆弱性——悪意あるリポジトリがクラウド認証情報を窃取</h2>
<ul>
<li>AmazonのAIコーディングアシスタント「Amazon Q Developer」に高深刻度（CVSS 8.5）の脆弱性（CVE-2026-12957）が発見された。この欠陥を悪用すると、悪意あるGitHubリポジトリをワークスペースとして開いた開発者のAWSクラウド認証情報が窃取される</li>
<li>攻撃経路はシンプルで、開発者がリポジトリを開いて「ワークスペースを信頼する」と承認するだけで、Amazon QがMCP（Model Context Protocol）サーバーを処理する際の欠陥を突かれ、クラウドへのアクセスキーが攻撃者の管理下に置かれる</li>
<li>AmazonはすでにパッチをリリースしているためAmazon Q Developerの即時更新が必要。AIコーディングアシスタントが扱うクラウド権限の最小化と、不審なリポジトリを開く際のサンドボックス活用も有効な対策だ</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security「A Record-Breaking Patch Tuesday for June 2026」 https://krebsonsecurity.com/2026/06/a-record-breaking-patch-tuesday-for-june-2026/</li>
<li>Krebs on Security「Netherlands Seizes 800 Servers, Arrests 2 for Aiding Cyberattacks」 https://krebsonsecurity.com/2026/05/netherlands-seizes-800-servers-arrests-2-for-aiding-cyberattacks/</li>
<li>Krebs on Security「Alleged Kimwolf Botmaster 'Dort' Arrested, Charged in U.S. and Canada」 https://krebsonsecurity.com/2026/05/alleged-kimwolf-botmaster-dort-arrested-charged-in-u-s-and-canada/</li>
<li>The Hacker News「FBI Warns Russian Intelligence Hackers Target Signal Backup Recovery Keys」 https://thehackernews.com/2026/06/fbi-warns-russian-intelligence-hackers.html</li>
<li>Bleeping Computer「FBI: Russian hackers now target Signal backup recovery keys」 https://www.bleepingcomputer.com/news/security/fbi-russian-hackers-now-target-signal-backup-recovery-keys/</li>
<li>Bleeping Computer「Data breach exposes up to 14.2 million email logins at six ISPs」 https://www.bleepingcomputer.com/news/security/data-breach-exposes-up-to-142-million-email-logins-at-six-isps/</li>
<li>Bleeping Computer「Polymarket customers lose $3 million in supply-chain attack」 https://www.bleepingcomputer.com/news/security/polymarket-customers-lose-3-million-in-supply-chain-attack/</li>
<li>The Hacker News「Amazon Q Developer Flaw Could Let Malicious Repos Run Code via MCP Configs」 https://thehackernews.com/2026/06/amazon-q-developer-flaw-could-let.html</li>
</ul>

</details>

---

[← 2026-06-29 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
