---
title: "セキュリティニュース 2026-07-08"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-07-08

**2026-07-08 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-08-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-08-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月8日）</h1>
<h2>「プロキシ」サービスの正体はボットネット——FBIがNetNutを差し押さえ</h2>
<ul>
<li>FBIが業界パートナーと連携し、イスラエルの上場企業Alarum Technologies（NASDAQ: ALAR）が運営する「住宅プロキシ」サービスNetNutに関連する数百のドメインを差し押さえた</li>
<li>住宅プロキシとは、一般家庭のネット回線・機器を経由してアクセス元を偽装できるサービス。広告業者や調査会社が正規利用する一方、悪用されやすい</li>
<li>約2週間前、セキュリティ研究者ブライアン・クレブス氏が、少なくとも200万台の機器がほとんど同意なく組み込まれた「Popa」ボットネットとNetNutのつながりを報じていた</li>
<li>Popaは4年にわたり、家庭用テレビボックス（Android搭載の格安ストリーミング機器）を乗っ取り、広告詐欺やアカウント乗っ取り、大量データ収集の踏み台にしていたとされる</li>
<li>安価な中華製Androidテレビボックスを使っている人は、機器の出所やファームウェアの更新状況を確認したい</li>
</ul>
<h2>家庭用ルーターに「裏口」——Tenda製品に隠しバックドア</h2>
<ul>
<li>複数のTenda製ルーターのファームウェアに、隠された認証用の「裏口（バックドア）」が発見された</li>
<li>攻撃者はこの裏口を使うことで、ルーターの管理画面に正規の管理者としてログインできてしまう恐れがある</li>
<li>ルーターの管理画面を乗っ取られると、家庭内のすべての通信を盗み見られたり、他の攻撃の踏み台にされたりする危険がある</li>
<li>安価な家庭用ルーターは購入後ずっとファームウェアを更新しない人が多く、こうした「隠れた裏口」が長期間気づかれないリスクがある。メーカーの発表を確認し、対象製品なら早めのファームウェア更新が必要</li>
</ul>
<h2>スマホの銀行詐欺を「月額レンタル」——Android向けマルウェア「RedWing」がテレグラムで拡散</h2>
<ul>
<li>テレグラム上で「RedWing」という新しいAndroidマルウェアが、銀行詐欺をそのまま実行できる「レンタルサービス」として提供されていることが、セキュリティ企業Zimperiumの調査チームzLabsにより確認された</li>
<li>利用者（＝低スキルの犯罪者でも）はスマホを乗っ取り、銀行アプリのログイン情報を盗み、二段階認証の確認コードまで横取りできる</li>
<li>月額300ドルで貸し出される既存マルウェア「Oblivion」の新型とみられ、専門知識がなくても「サービスとして」銀行詐欺を実行できてしまう分業化が進んでいる</li>
<li>スマホの銀行アプリを使う人は、公式ストア以外からのアプリインストールを避け、身に覚えのない権限要求（アクセシビリティ権限など）を許可しないことが基本的な防御になる</li>
</ul>
<h2>スパイウェア「ペガサス」を調査していた欧州議員のスマホに、当のペガサスが仕込まれていた</h2>
<ul>
<li>欧州議会でスパイウェア「ペガサス」の乱用問題を調査していた議員のスマホから、調査対象そのものであるペガサスの感染痕跡が見つかったと、調査団体Citizen Labが報告した</li>
<li>ペガサスはイスラエルのNSOグループが開発した高度な監視ツールで、政府機関などが政治家・記者・活動家の端末に極秘裏にインストールし、通話やメッセージを盗み見ることができる</li>
<li>欧州議会の議員は「法の支配への直接的な攻撃だ」と述べており、監視問題を調査する立場の人物自身が標的にされたことに強い懸念が示されている</li>
<li>政治家や記者など「狙われる可能性が高い立場」の人にとっては、端末のロックダウンモード活用やセキュリティ専門家による定期点検が現実的な対策となる</li>
</ul>
<h2>AIエージェントが勝手に情報漏洩？GitHubの自動化ワークフローに新たな穴</h2>
<ul>
<li>セキュリティ企業Noma Securityの研究者が、GitHubの「Agentic Workflows」（AIエージェントが自動でコード管理作業を行う仕組み）を悪用する手口を示した</li>
<li>攻撃者は公開リポジトリに一見普通の「issue（課題報告）」を投稿するだけでよく、盗んだ認証情報も組織への正規アクセス権も不要</li>
<li>組織がそのAIエージェントに複数リポジトリへの読み取り権限を与えていた場合、非公開リポジトリの中身まで漏れ出す恐れがあるという</li>
<li>AIエージェントに「何でも読める権限」を安易に与える設定が広がるほど、こうした「エージェント経由の情報漏洩」のリスクも高まる。開発現場でAIエージェントを使う際は、アクセス範囲を必要最小限に絞ることが重要</li>
</ul>
<h2>親ロシア派ハッカー集団のメンバーをスペイン警察が逮捕</h2>
<ul>
<li>スペインの国家警察が、親ロシア派ハクティビスト（政治的動機によるハッカー）集団「CyberArmy of Russia Reborn」と「Z-Pentest」の活発なメンバーとされる男を逮捕した</li>
<li>両集団は政治的メッセージを掲げてサイバー攻撃を行う「ハクティビズム」の代表格として知られている</li>
<li>各国の捜査機関が国境をまたいでこうした攻撃集団のメンバーを特定・摘発する動きが続いており、今回の逮捕もその一環</li>
</ul>
<h2>米サイバー当局CISA、委託業者のミスで内部情報が流出——議会が追及</h2>
<ul>
<li>米国のサイバーセキュリティ・インフラセキュリティ庁（CISA）の委託業者が、クラウドの管理用キー（AWS GovCloudの認証情報）を含む大量の内部情報を、誰でも見られる公開GitHubアカウントに意図せず公開していたことが報じられた</li>
<li>米議会の上下両院の議員が、この流出についてCISAに説明を求めている</li>
<li>CISAは現在も流出の封じ込めと、漏れた認証情報の無効化作業に追われているという</li>
<li>サイバーセキュリティを守る立場の政府機関自身が「基本的な設定ミス」で機密情報を流出させた形で、委託業者の管理体制のあり方が問われている</li>
</ul>
<h2>リモートアクセスの守り役BeyondTrustに重大な欠陥——認証回避のリスク</h2>
<ul>
<li>特権アクセス管理などを手がけるセキュリティ企業BeyondTrustが、自社の「Remote Support」と「Privileged Remote Access」ソフトウェアに、認証を回避されうる重大な脆弱性2件が見つかったとして顧客に注意を呼びかけた</li>
<li>これらの製品は、社内システムの管理者が遠隔からサーバーやパソコンにアクセスするために使われる、いわば「特権の門番」的な役割のソフト</li>
<li>その「門番」自体に認証回避の穴があると、悪用された場合に社内システムへの侵入口になりかねない</li>
<li>該当製品を利用している企業の情報システム担当者は、提供元の修正プログラムを速やかに適用することが求められる</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/</li>
<li>https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/</li>
<li>https://www.bleepingcomputer.com/news/security/hidden-backdoor-in-tenda-router-firmware-grants-admin-access/</li>
<li>https://thehackernews.com/2026/07/redwing-maas-packages-android-bank.html</li>
<li>https://www.wired.com/story/eu-politicians-investigated-pegasus-spyware-then-it-ended-up-on-one-of-their-phones/</li>
<li>https://thehackernews.com/2026/07/public-github-issue-could-trick-github.html</li>
<li>https://www.bleepingcomputer.com/news/security/spain-arrests-suspected-member-of-pro-russian-hacktivist-groups/</li>
<li>https://krebsonsecurity.com/2026/05/lawmakers-demand-answers-as-cisa-tries-to-contain-data-leak/</li>
<li>https://www.bleepingcomputer.com/news/security/beyondtrust-warns-of-critical-flaws-in-remote-access-software/</li>
</ul>

</details>

---

[← 2026-07-08 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
