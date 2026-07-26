---
title: "セキュリティニュース 2026-06-28"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-28

**2026-06-28 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-28-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-28-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026-06-28</h1>
<h2>Scattered Spider、初公判初日に有罪答弁——ロンドン交通局攻撃で</h2>
<ul>
<li>英国のサイバー犯罪グループ「Scattered Spider（スキャタードスパイダー）」のメンバー2名が、2024年8月にロンドン交通局（TfL）のネットワークを麻痺させたサイバー攻撃の刑事訴追に対し、6週間の裁判を予定していた初公判初日に有罪答弁を行った</li>
<li>Scattered Spiderは英語話者の若者を中心としたサイバー犯罪集団で、SIMスワッピング（携帯電話番号の乗っ取り）、フィッシング、ソーシャルエンジニアリング（人を騙す心理的手法）を組み合わせた高度な攻撃で知られ、Caesars EntertainmentやMGM Resortsなど多数の大企業を標的にしてきた</li>
<li>今回の有罪答弁は英国での初の法的決着で、米国でも複数のメンバーが起訴されており、国際的な連携捜査による同グループの摘発が進んでいる</li>
</ul>
<h2>「Popa」ボットネット：AndroidテレビBOXを不正流用、上場企業が関与か</h2>
<ul>
<li>4年以上にわたって数百万台のAndroid搭載テレビBOX（ストリーミング端末）を乗っ取ってきたボットネット「Popa」が、イスラエルのナスダック上場企業Alarum Technologies（NASDAQ: ALAR）の子会社「NetNut」と関連していることを、複数のセキュリティ企業の研究者が結論づけた</li>
<li>Popaボットネットは広告詐欺（偽の広告クリックで収益を詐取）、アカウント乗っ取り、大規模なデータスクレイピング（ウェブの情報を無断収集）に感染端末のネット通信を利用しており、ResNetや他のいわゆる「住宅用プロキシ（家庭用IPアドレスを中継するサービス）」の一部が実はボットネットの隠れ蓑になっていた構造が浮き彫りになった</li>
<li>上場企業が関与する形での大規模不正利用は前例が少なく、住宅用プロキシサービスが持つ悪用リスクを法的・倫理的に問い直す契機となっている</li>
</ul>
<h2>第2位のランサムウェア集団「The Gentlemen」：運営者の素顔を追う</h2>
<ul>
<li>ランサムウェア攻撃の被害件数で第2位に急浮上した犯罪グループ「The Gentlemen（ザ・ジェントルメン）」は、被害者が支払った身代金の90%を攻撃実行者（アフィリエイト）に還元するという破格の分配率で優秀なハッカーを積極的に勧誘し急成長した</li>
<li>KrebsOnSecurityが管理者の実社会での身元特定につながる痕跡を複数発見・分析したとして報道しており、身代金ビジネスの高額な利益配分がいかに犯罪エコシステムを拡大させているかを示している</li>
<li>ランサムウェア集団は分散した匿名組織として活動するため摘発が困難だが、運営者の特定と国際的な訴追が抑止力として不可欠であり、被害組織への注意喚起が継続されている</li>
</ul>
<h2>MetaのAIサポートボットを悪用——Instagramアカウントが乗っ取られる</h2>
<ul>
<li>オバマ政権ホワイトハウスの公式Instagramアカウントと米宇宙軍（Space Force）最上位曹長のアカウントが、親イラン的な画像・メッセージに一時的に改ざんされた</li>
<li>攻撃手法として、Telegramでは「MetaのAIサポートアシスタントにパスワードリセットを誘導させる方法」が出回っており、攻撃者がAIボットを騙してアカウント所有者の確認なしにパスワードリセットを実行させたとみられる</li>
<li>AIによる自動サポート機能がソーシャルエンジニアリング（人や機械を心理的に操る手口）の新しい攻撃経路になっていることを示した事例で、Metaは調査中。著名アカウントや政府関連アカウントは二段階認証（2FA）の強制適用が特に重要だ</li>
</ul>
<h2>SharkLoader：新型マルウェアがCobalt Strikeを投下する「StrikeShark」攻撃</h2>
<ul>
<li>カスペルスキーが「StrikeShark」と名付けた新たなサイバー攻撃キャンペーンが確認され、「SharkLoader」という新種のローダー型マルウェア（感染端末に追加の悪意あるプログラムを読み込む役割）が、ペネトレーションテストツールを悪用した攻撃ツール「Cobalt Strike Beacon（コバルトストライク・ビーコン）」を展開することが判明した</li>
<li>攻撃はインドネシアの外交機関、台湾・東南アジアの政府機関を標的にしており、中国語話者のAPT（国家支援とみられる高度持続的脅威グループ）との関連も指摘されている</li>
<li>Cobalt Strikeは本来セキュリティ専門家が使う正規のツールだが、その機能がサイバー犯罪・スパイ活動に転用されており、政府・外交機関は未知のローダーマルウェアに対するEDR（端末脅威検知・対応）ツールの整備が急務だ</li>
</ul>
<h2>CISA緊急警告：PTC Windchill RCE脆弱性が工場・製品管理システムで悪用中</h2>
<ul>
<li>米CISAが、PTC社製の製品ライフサイクル管理ソフト「Windchill PDMLink」および「FlexPLM」に存在するリモートコード実行（RCE）脆弱性をKEV（既知の悪用された脆弱性カタログ）に追加し、連邦機関に対して緊急対応を求めた</li>
<li>Windchill（ウィンドチル）は自動車・航空・製造業の大企業が製品設計データや部品情報を管理するために広く使うシステムで、攻撃者が外部からコードを実行できるこの脆弱性は、ウェブシェル（外部からサーバーを操作できる不正プログラム）を設置する攻撃に利用されていることが確認されている</li>
<li>製造業・ものづくり企業はWindchill製品の緊急パッチ適用を最優先とし、外部からのアクセス制限やウェブシェルの有無を確認する対応が強く推奨される</li>
</ul>
<h2>AIコーディングエージェントの盲点：無害に見えるGitHubリポジトリでマルウェアが実行される</h2>
<ul>
<li>セキュリティスキャナー、AIエージェント、人間のレビュアー全員が見落とす形で隠蔽された悪意あるペイロード（攻撃コード）が、一見無害なGitHubリポジトリをAIコーディングツールがクローン（複製・セットアップ）する際に自動実行される手法が実証された</li>
<li>AIコーディングエージェントは開発者の指示でリポジトリを取得・環境構築する際に自動的にスクリプトを実行する場合があり、この信頼を悪用してマルウェアを仕込む「リポジトリ型サプライチェーン攻撃」が可能であることを研究者が示した</li>
<li>AIコーディングツールを使う際は、不明なリポジトリのクローンは必ずサンドボックス（隔離環境）内で行い、setup/install スクリプトを実行前に手動確認することが必須の防御策となる</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li><a href="https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/">Scattered Spider Hackers Plead Guilty on Day 1 of Trial</a> - Krebs on Security</li>
<li><a href="https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/">'Popa' Botnet Linked to Publicly-Traded Israeli Firm</a> - Krebs on Security</li>
<li><a href="https://krebsonsecurity.com/2026/06/who-runs-the-ransomware-group-the-gentlemen/">Who Runs the Ransomware Group 'The Gentlemen?'</a> - Krebs on Security</li>
<li><a href="https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/">Hackers Used Meta's AI Support Bot to Seize Instagram Accounts</a> - Krebs on Security</li>
<li><a href="https://thehackernews.com/2026/06/new-sharkloader-malware-deploys-cobalt.html">New SharkLoader Malware Deploys Cobalt Strike in StrikeShark Cyberattacks</a> - The Hacker News</li>
<li><a href="https://thehackernews.com/2026/06/cisa-adds-exploited-ptc-windchill-rce.html">CISA Adds Exploited PTC Windchill RCE Flaw to KEV as Web Shell Attacks Continue</a> - The Hacker News</li>
<li><a href="https://www.bleepingcomputer.com/news/security/clean-github-repo-tricks-ai-coding-agents-into-running-malware/">Clean GitHub repo tricks AI coding agents into running malware</a> - Bleeping Computer</li>
</ul>

</details>

---

[← 2026-06-28 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
