---
title: "セキュリティニュース 2026-07-02"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-07-02

**2026-07-02 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-02-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-02-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026-07-02</h1>
<h2>クボタ北米法人が不正アクセス被害——35日間侵入、社員と家族の社会保障番号や口座情報が流出</h2>
<ul>
<li>農業機械大手クボタの北米法人「Kubota North America」が、2026年3月16日から4月20日までの約35日間にわたり、攻撃者にネットワークへ侵入されていたことを公表した。従業員5万2000人超を抱える大企業で、影響範囲は今も調査中</li>
<li>流出の恐れがある情報は、本人と扶養家族の氏名、社会保障番号（米国の国民ID番号にあたる）、生年月日、納税者ID、政府発行の身分証明書番号、銀行口座情報、企業のペイメントカード情報、さらに保険給付関連データと多岐にわたる</li>
<li>ランサムウェアグループの犯行声明は今のところなく、攻撃者の身元も特定されていない。「なりすまし」に使われる情報一式がそろっているため、対象となる従業員・家族は信用情報機関への「フリーズ」設定や、心当たりのない借入・口座開設通知に注意する必要がある。日本企業の海外拠点も標的になりうる典型例だ</li>
</ul>
<h2>米国土安全保障省の情報共有基盤「HSIN」が侵害——ワールドカップ警備の直前に発覚</h2>
<ul>
<li>米国土安全保障省（DHS）は、連邦・州・地方自治体・民間パートナーが利用する情報共有プラットフォーム「HSIN（Homeland Security Information Network）」が、身元不明の攻撃者に侵害されたことを確認した。侵害は2026年5月末から6月初旬にかけて発生し、HSINのサーバーと共同作業用のSharePointシステムが標的になった</li>
<li>「HSIN」とは、テロ対策や災害対応などで政府機関と民間企業が情報をやり取りするための専用ネットワークのこと。機密情報システムへの影響はないとされるが、実際にデータが盗まれたかどうかは依然として調査中だ</li>
<li>今回の侵害が懸念される理由は、米国が国内で開催されるワールドカップの警備を担う時期と重なっていること。警備計画や対応手順が漏れていれば、大規模イベントの安全確保に影響しかねない。議会でも説明を求める声が上がっており、政府機関のセキュリティ管理体制そのものへの信頼が問われている</li>
</ul>
<h2>Microsoft 365に8100万回のログイン試行——2週間で64組織を標的、78アカウントが突破される</h2>
<ul>
<li>セキュリティ企業Huntressの調査により、2026年6月12日から26日の2週間、Microsoft 365（企業向けメール・オフィスサービス）を狙った大規模な「パスワードスプレー攻撃」が確認された。攻撃者は過去の情報漏洩で出回った既存のユーザー名とパスワードの組み合わせを使い、Azure CLI（コマンド操作ツール）経由で8100万回以上のログインを試行した</li>
<li>64組織が標的にされ、うち78アカウントが実際に突破された。攻撃者は「ROPC」という特殊な認証方式を悪用しており、多くの企業が導入している多要素認証（MFA）が、この特定の経路だけカバーしていなかったことが突破を許した原因だ。全体でもこうしたパスワードスプレー攻撃は前年比155倍に急増しており、1組織あたり月平均1964件の不正ログイン試行が記録されている</li>
<li>Microsoft 365やGoogle Workspaceなど会社のメールサービスを使っている人は他人事ではない。IT担当者は、MFAを「一部のアプリだけ」でなく全クラウドアプリに適用し、「レポートのみ」設定になっていないか点検すること。個人でも同じパスワードを複数サービスで使い回さないことが最大の防御になる</li>
</ul>
<h2>AIコーディングツール「Cursor」に致命的な欠陥——クリック不要でPCを乗っ取られる恐れ</h2>
<ul>
<li>セキュリティ企業Cato AI Labsが、AIを使ったコード編集ツール「Cursor」に2つの重大な脆弱性を発見し、「DuneSlide」と命名した（CVE-2026-50548、CVE-2026-50549、深刻度はそれぞれ10点満点中9.8と9.3）。ごく普通に見える1つのプロンプト（AIへの指示文）だけで、Cursorの安全機能（サンドボックス）を突破し、開発者のパソコン上で任意のコマンドを実行できてしまう</li>
<li>恐ろしいのは、悪意あるリンクをクリックする必要も、実行を許可する確認ボックスをクリックする必要もない点。AIにコードを書かせたり読ませたりする普段の作業の中で、仕込まれた指示が静かに実行されてしまう</li>
<li>ソフトウェア開発でAIコーディングツールを使う人が急増する中、こうした「プロンプトインジェクション」（AIに偽の指示を注入する攻撃）はAI開発ツール全体に共通するリスクだ。修正パッチが出ている場合は速やかに更新し、AIエディタに読み込ませる外部コード・ドキュメントの出所を必ず確認すること</li>
</ul>
<h2>Claude(クロード)がハッカーの手口発見を後押し——米国の音楽フェス、ほぼ全てで不正チケット発行が可能に</h2>
<ul>
<li>ある研究者が、Anthropic（アンソロピック）のAIモデル「Claude Opus 4.7」を使いながらチケット販売システム「Front Gate」のウェブサイトを調べたところ、システムの不備を突いて任意のチケットを自由に発行できる方法を見つけ出した。Front Gateはロラパルーザやボナルー・フェスティバルなど、米国のほぼすべての大型音楽フェスで使われている基盤システムだ</li>
<li>AIチャットボットは、脆弱性を探す作業そのものは実行しないが、コードの読み解きや攻撃の糸口の整理を手伝うことで、専門知識が少ない人でも高度な調査を進められるようにしてしまう。今回はセキュリティ研究者が発見・報告する「善意の利用」だったが、同じ手順を悪意ある人物が踏めば大規模な不正転売や詐欺につながりかねない</li>
<li>音楽フェスのチケットを購入する人にとっては、不正発行チケットの流通により正規購入者が入場できない・偽チケットをつかまされるといった実害につながる可能性がある。AIツールの普及によって「誰でも脆弱性調査に手が届く」時代になったことを踏まえ、チケット販売会社側は認証や不正検知の仕組みを早急に見直す必要がある</li>
</ul>
<h2>Adobe ColdFusionとCampaign Classicに最高深刻度の欠陥7件——企業サイトやメール配信システムが標的に</h2>
<ul>
<li>Adobeは、企業のウェブアプリ基盤「ColdFusion」とマーケティングメール配信ツール「Campaign Classic」に存在する、深刻度が10点満点中10.0（最高値）の脆弱性を含む合計7件の欠陥を修正するパッチを公開した。悪用されると任意のコードの実行、権限の昇格、本来読めないはずのファイルの読み取り、セキュリティ機能の回避などが可能になる</li>
<li>ColdFusionは金融機関や官公庁を含む多くの組織で今も現役の企業向けウェブ基盤として使われており、Campaign Classicは大企業のメールマガジン配信などに使われている。どちらも「裏側」で動くシステムのため利用者から見えにくいが、悪用されれば企業サイトの改ざんや顧客情報の窃取につながる</li>
<li>直接ユーザーが操作するものではないが、普段使っているウェブサービスや届くメールの配信元がこうした基盤を使っている可能性がある。企業のシステム担当者は最高深刻度（CVSS10.0）という評価を重く受け止め、パッチを最優先で適用すべきだ</li>
</ul>
<h2>負荷分散装置「Kemp LoadMaster」に実際の攻撃が発生——CVSS9.6の重大な欠陥</h2>
<ul>
<li>カナダのセキュリティ企業eSentireの脅威対応チームが、企業向け負荷分散装置「Progress Kemp LoadMaster」の重大な脆弱性（CVE-2026-8037、深刻度9.6）に対する実際の悪用試行を検知したと報告した。認証なしでOS（基本ソフト）にコマンドを注入できる欠陥で、悪用されれば装置を乗っ取られる恐れがある</li>
<li>「ロードバランサー（負荷分散装置）」とは、多数のアクセスを複数のサーバーに振り分けて、ウェブサービスを止まらせないようにする裏方の機器。普段利用者の目には触れないが、多くの企業サイトやオンラインサービスの可用性を支えている</li>
<li>この装置が乗っ取られると、その裏にあるウェブサービス全体が停止したり、通信内容を盗み見られたりする危険がある。Kemp LoadMasterを利用する組織は、公開されている修正パッチを直ちに適用し、インターネットから装置の管理画面へ直接アクセスできる設定になっていないか至急確認すべきだ</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>Bleeping Computer「Kubota says hackers had month-long access to network systems」 https://www.bleepingcomputer.com/news/security/kubota-says-hackers-had-month-long-access-to-network-systems/</li>
<li>Bleeping Computer「DHS confirms hackers breached HSIN info-sharing platform」 https://www.bleepingcomputer.com/news/security/dhs-confirms-hackers-breached-hsin-info-sharing-platform/</li>
<li>Bleeping Computer「Hackers target Microsoft 365 accounts with 81 million login attempts」 https://www.bleepingcomputer.com/news/security/hackers-target-microsoft-365-accounts-with-81-million-login-attempts/</li>
<li>The Hacker News「Critical Cursor Flaws Could Let Prompt Injection Escape Sandbox and Run Commands」 https://thehackernews.com/2026/07/critical-cursor-flaws-could-let-prompt.html</li>
<li>Wired Security「Claude Helped a Hacker Find a Way to Issue Tickets to Almost Every US Music Festival」 https://www.wired.com/story/claude-helped-a-hacker-find-a-way-to-issue-tickets-to-almost-every-us-music-festival/</li>
<li>The Hacker News「Adobe Patches 7 CVSS 10.0 Flaws in ColdFusion and Campaign Classic」 https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html</li>
<li>The Hacker News「Progress Kemp LoadMaster Pre-Auth RCE Flaw Faces Active Exploitation Attempts」 https://thehackernews.com/2026/07/latest-progress-kemp-loadmaster-pre.html</li>
</ul>

</details>

---

[← 2026-07-02 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
