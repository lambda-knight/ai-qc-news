---
title: "セキュリティニュース 2026-06-24"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-24

**2026-06-24 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-24-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-24-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>サイバーセキュリティニュース 2026年6月24日</h1>
<p>「Scattered Spider」有罪答弁、CISAデータ漏えい、LastPassサプライチェーン侵害、macOS ClickFix攻撃、量子暗号への2030年移行令など、今週も注目のセキュリティニュースをお届けします。</p>
<h2>Scattered Spiderメンバーが有罪答弁：ロンドン交通局ハック事件で初の司法決着</h2>
<ul>
<li>英米で活動するハッカー集団「Scattered Spider（スキャタード・スパイダー）」のメンバーが、ロンドン交通局（TfL）へのサイバー攻撃に関して初日から有罪答弁</li>
<li>Scattered Spiderは2022〜2024年にかけてMGMリゾーツ・シーザーズエンターテインメント・TfLなど大企業を次々と攻撃した英語圏の若者中心グループ</li>
<li>ソーシャルエンジニアリング（電話やSMSで従業員を騙す手口）を主な武器とし、多要素認証を突破するケースが多かった</li>
<li>TfL攻撃では数千人分の乗客データと銀行口座情報が流出し、システム復旧に数週間を要した</li>
<li>サイバー犯罪者の逮捕・起訴が加速しており、匿名性への過信が崩れつつある</li>
</ul>
<p>出典: <a href="https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/">Krebs on Security</a> (2026/06/23) / <a href="https://www.bleepingcomputer.com/news/security/scattered-spider-members-plead-guilty-to-hacking-transport-for-london/">Bleeping Computer</a> (2026/06/23)</p>
<h2>MetaのAIサポートボットが悪用：Instagramアカウント乗っ取りに利用される</h2>
<ul>
<li>攻撃者がMeta（フェイスブック親会社）の公式AIサポートチャットボットを悪用し、Instagramアカウントの乗っ取りに成功したケースが確認された</li>
<li>手口：ボットに「アカウント復旧」を装って問い合わせることで、正規の認証フローを迂回するアドバイスを引き出す</li>
<li>AIが意図せず攻撃者のステップバイステップガイドになってしまった「プロンプトインジェクション」的悪用</li>
<li>被害者は自分のアカウントから締め出され、身代金要求や詐欺被害に発展するケースも</li>
<li>AIサポートシステムへのセキュリティ検証（レッドチーミング）の重要性があらためて浮き彫りに</li>
</ul>
<p>出典: <a href="https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/">Krebs on Security</a> (2026/06/23)</p>
<h2>CISAがデータ漏えい対応中：議会が説明を要求</h2>
<ul>
<li>米国のサイバーセキュリティ機関「CISA（シーサ）」が自機関内のデータ漏えい発生を確認し、封じ込め対応に追われている</li>
<li>議員らがCISAに対し、漏えいした情報の範囲・原因・影響の詳細説明を要求する書簡を送付</li>
<li>国家のサイバー防衛を担う機関自身が攻撃を受けたことで、「守る側が守られていない」という深刻な懸念が生まれている</li>
<li>漏えい情報には政府内部の脆弱性情報・インフラ情報が含まれる可能性があり、二次被害のリスクがある</li>
<li>政府機関のセキュリティ体制の見直しと透明性確保が急務</li>
</ul>
<p>出典: <a href="https://krebsonsecurity.com/2026/06/lawmakers-demand-answers-as-cisa-tries-to-contain-data-leak/">Krebs on Security</a> (2026/06/23)</p>
<h2>LastPassがデータ侵害を確認：Klueのサプライチェーン攻撃経由</h2>
<ul>
<li>パスワード管理ツール「LastPass（ラストパス）」が、Klue（営業インテリジェンスツール）のサプライチェーン攻撃を通じてデータ侵害を受けたことを正式確認</li>
<li>サプライチェーン攻撃とは：直接でなく、利用している外部サービスやソフトウェア経由で侵入される手口</li>
<li>LastPassは2022年の大規模侵害に続き再び被害に遭い、ユーザーの信頼回復に向けた取り組みが再び問われる状況に</li>
<li>流出データの範囲は調査中だが、アカウント関連情報が含まれる可能性</li>
<li>「使うツール全体のセキュリティを自分のセキュリティとして考える」サプライチェーンリスク管理が必須</li>
</ul>
<p>出典: <a href="https://www.bleepingcomputer.com/news/security/lastpass-confirms-data-breach-in-klue-supply-chain-attack/">Bleeping Computer</a> (2026/06/23)</p>
<h2>macOS「ClickFix」攻撃：DMGを隠し実行して情報窃取マルウェアを展開</h2>
<ul>
<li>MacユーザーをターゲットにしたClickFix（クリックフィックス）攻撃の新手法が確認された</li>
<li>ユーザーに「エラー修正のためクリックしてください」と表示し、クリックするとDMGファイル（Macのディスクイメージ）がバックグラウンドで密かにマウントされる</li>
<li>マウント後、インフォスティーラー（情報窃取型マルウェア）が自動実行され、パスワード・クレジットカード情報・仮想通貨ウォレットが抜き取られる</li>
<li>macOSの「セキュリティポップアップが出ない」仕組みを悪用した新しい回避技術が用いられている</li>
<li>Macだから安全という過信は禁物。不審なウェブページでの指示には絶対に従わないことが重要</li>
</ul>
<p>出典: <a href="https://www.bleepingcomputer.com/news/security/new-macos-clickfix-attack-silently-mounts-dmgs-to-push-infostealer/">Bleeping Computer</a> (2026/06/23)</p>
<h2>米大統領令で2030年までに量子暗号移行義務化：連邦機関が対応必須</h2>
<ul>
<li>トランプ政権が連邦政府機関に対し、2030年までに「耐量子暗号（ポスト量子暗号）」への移行を義務付ける大統領令を発令</li>
<li>耐量子暗号とは：将来の量子コンピュータによる解読に耐えられる次世代の暗号方式</li>
<li>現在広く使われるRSAやECC（楕円曲線暗号）は、実用的な量子コンピュータが登場すれば数時間で解読される恐れがある</li>
<li>NIST（米国立標準技術研究所）が標準化した耐量子アルゴリズム（ML-KEM・ML-DSAなど）の採用が求められる</li>
<li>企業も「今やり取りしている暗号化データを将来解読される」リスク（ハーベストナウ・ディクリプトレイター攻撃）に備えた対応が急務</li>
</ul>
<p>出典: <a href="https://thehackernews.com/2026/06/trump-order-sets-2030-deadline-for-federal-post-quantum-crypto-migration.html">The Hacker News</a> (2026/06/23)</p>
<h2>GitHubがactions/checkoutを更新：「Pwn Request」攻撃パターンを自動遮断</h2>
<ul>
<li>GitHub公式のCI/CDアクション「actions/checkout」が更新され、プルリクエスト経由のコード実行攻撃「Pwn Request（ポーン・リクエスト）」の典型的なパターンを自動検出・遮断する機能が追加された</li>
<li>Pwn Request攻撃とは：外部からのプルリクエストに悪意あるコードを混ぜ、CIパイプラインで自動実行させてリポジトリ権限を奪う手口</li>
<li>オープンソースプロジェクトのCI/CDワークフローが主な標的で、GitHubシークレット（秘密鍵・APIキーなど）の窃取につながる</li>
<li>更新は自動適用されるため、多くのリポジトリが即座に保護される</li>
<li>ソフトウェア開発の自動化が進むほど、CI/CDパイプライン自体へのセキュリティ対策が重要になっている</li>
</ul>
<p>出典: <a href="https://thehackernews.com/2026/06/github-updates-actionscheckout-to-block-common-pwn-request-attack-patterns.html">The Hacker News</a> (2026/06/23)</p>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security https://krebsonsecurity.com/</li>
<li>The Hacker News https://thehackernews.com/</li>
<li>Bleeping Computer https://www.bleepingcomputer.com/</li>
<li>Wired Security https://www.wired.com/category/security/</li>
<li>JPCERT/CC https://www.jpcert.or.jp/</li>
</ul>

</details>

---

[← 2026-06-24 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
