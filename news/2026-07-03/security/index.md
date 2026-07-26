---
title: "CISA自身が情報漏えい・AIエージェントが完全自動でランサムウェア攻撃 セキュリティニュース【2026/07/03】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# CISA自身が情報漏えい・AIエージェントが完全自動でランサムウェア攻撃 セキュリティニュース【2026/07/03】

**2026-07-03 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-03-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-03-security)

---

## 概要

米サイバーセキュリティ機関CISAの契約社員がクラウド認証情報をGitHubに公開、医療機器大手Medtronicで約900万件の個人情報流出、そして史上初とみられるAIエージェントだけで完遂されたランサムウェア攻撃「JADEPUFFER」など、今日のセキュリティニュース7本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・CISA契約社員がクラウド認証情報をGitHubに公開——政府自身の情報漏えいに議会が追及
・医療機器大手Medtronicがデータ侵害——恐喝集団ShinyHuntersが関与、約900万件の個人情報流出
・史上初、AIエージェントが完全自動でランサムウェア攻撃を実行——「JADEPUFFER」事件
・ランサムウェア集団がCitrix Bleed 2を悪用——正規の管理ツールと窃取した認証情報で侵入
・スパイ集団ToddyCatの新マルウェア「Umbrij」——OAuth悪用で企業のGmailを盗聴
・Cisco・Microsoft SharePointの既知の脆弱性が実際の攻撃で悪用開始——連邦機関に緊急パッチ命令
・わずか3秒でMicrosoft 365アカウント乗っ取り——「ClickFix」対策にOperaが新機能「Paste Protect」

▼ 参考ソース
- Krebs on Security: Lawmakers Demand Answers as CISA Tries to Contain Data Leak
  https://krebsonsecurity.com/2026/05/lawmakers-demand-answers-as-cisa-tries-to-contain-data-leak/
- Bleeping Computer: Medtronic notifies customers impacted by ShinyHunters data breach
  https://www.bleepingcomputer.com/news/security/medtronic-notifies-customers-impacted-by-shinyhunters-data-breach/
- The Hacker News: AI Agent Exploits Langflow RCE to Automate Database Ransomware Attack
  https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html
- The Hacker News: Ransomware Groups Turn to Citrix Bleed 2, BYOVD, and Supply Chain Credentials
  https://thehackernews.com/2026/07/ransomware-groups-turn-to-citrix-bleed.html
- The Hacker News: ToddyCat-Linked Umbrij Malware Abuses OAuth to Access Gmail via Google API
  https://thehackernews.com/2026/07/toddycat-linked-umbrij-malware-abuses.html
- Bleeping Computer: Cisco finally confirms attackers exploiting Unified CM flaw
  https://www.bleepingcomputer.com/news/security/cisco-finally-confirms-attackers-exploiting-unified-cm-flaw/
- Bleeping Computer: CISA: Microsoft SharePoint RCE flaw now actively exploited
  https://www.bleepingcomputer.com/news/security/cisa-microsoft-sharepoint-rce-flaw-now-actively-exploited/
- Bleeping Computer: ConsentFix and ClickFix: How Microsoft 365 Accounts are Hijacked in 3 Seconds
  https://www.bleepingcomputer.com/news/security/consentfix-and-clickfix-how-microsoft-365-accounts-are-hijacked-in-3-seconds/
- Bleeping Computer: Opera rolls out Paste Protect feature to fight ClickFix attacks
  https://www.bleepingcomputer.com/news/security/opera-rolls-out-paste-protect-feature-to-fight-clickfix-attacks/

#セキュリティ #サイバーセキュリティ #ランサムウェア #情報漏えい #ずんだもん #四国めたん #ゆっくり解説 #CISA #Microsoft365 #AIエージェント

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026年7月3日</h1>
<h2>CISA契約社員がクラウド認証情報をGitHubに公開——政府自身の情報漏えいに議会が追及</h2>
<ul>
<li>米サイバーセキュリティ・インフラ安全保障庁（CISA）の契約社員が、「Private-CISA」という名前の公開GitHubアカウントを作成し、機密情報を大量に公開していたことが判明した。契約社員はGitHubの「認証情報公開防止」機能を意図的に無効化した上で、2025年11月ごろから作業用のメモ置き場としてこのリポジトリを使い続けていたとみられる</li>
<li>公開されていたのは、AWS GovCloud（政府機関向けクラウド）の認証情報数十件分、CISA内部システムへの平文パスワード、Kubernetes（システム運用基盤）の設定ファイル、さらに全リポジトリへアクセスできるGitHubアプリのRSA秘密鍵など。2026年4月下旬には特に機密性の高い情報が追加され、発見時点まで公開状態が続いていた</li>
<li>米議会ではマギー・ハッサン上院議員が「CISAの内部方針に深刻な懸念がある」と、ベニー・トンプソン下院議員が「セキュリティ文化の低下と契約管理能力の欠如」と、それぞれ問題視した。CISAは5月20日以降にRSA秘密鍵を無効化したものの、他の重要な認証情報の入れ替えはまだ完了していない。国のサイバー防御を担う機関自身が、初歩的な設定ミスで情報を漏らした形だ</li>
</ul>
<h2>医療機器大手Medtronicがデータ侵害——恐喝集団ShinyHuntersが関与、約900万件の個人情報流出</h2>
<ul>
<li>医療機器大手Medtronicは、2026年4月13日から19日にかけて企業ITシステムに第三者が不正アクセスしたと顧客に通知した。異常な挙動は4月15日に検知されている。流出した可能性があるのは氏名、連絡先、生年月日、社会保障番号、健康関連情報など約900万件に上る</li>
<li>恐喝グループ「ShinyHunters」が4月18日、ダークウェブの掲載サイトにMedtronicの名前を載せ、4月21日までに身代金を支払わなければデータを公開すると脅迫した。ただし同月後半には掲載リストから外れており、盗まれたデータがインターネット上に実際に公開された形跡はない</li>
<li>医療機器自体の安全性には影響がないとされているが、対象となった顧客には24ヶ月間の信用情報監視と身元盗難保護サービスが提供される。社会保障番号と健康情報がセットで漏れているため、対象者はなりすまし被害に特に注意が必要だ</li>
</ul>
<h2>史上初、AIエージェントが完全自動でランサムウェア攻撃を実行——「JADEPUFFER」事件</h2>
<ul>
<li>セキュリティ企業Sysdigの脅威調査チームが、人間の手をほぼ介さずAIエージェント（自律的にタスクをこなすAIプログラム）だけで最初から最後まで完遂されたとみられるランサムウェア攻撃を発見し、「JADEPUFFER」と名付けた</li>
<li>Sysdigによれば、この攻撃では大規模言語モデル（LLM）が侵入、認証情報の窃取、ネットワーク内部への侵入拡大、そして最終的に企業の本番データベースの暗号化と消去まで、一連の攻撃工程をすべて自ら担っていたという</li>
<li>ランサムウェア攻撃は従来、複数の人間の攻撃者が役割分担して実行するのが一般的だったが、AIエージェントが一貫して実行できることが実証された形になる。攻撃の自動化・高速化が進むことで、今後は防御側もAIによる迅速な検知・対応がより重要になる</li>
</ul>
<h2>ランサムウェア集団がCitrix Bleed 2を悪用——正規の管理ツールと窃取した認証情報で侵入</h2>
<ul>
<li>ランサムウェア集団「Anubis」に関連する攻撃者が、Citrix製品の脆弱性「Citrix Bleed 2」（CVE-2025-5777）を悪用して企業ネットワークへの最初の侵入口を得ていることが確認された</li>
<li>攻撃者ごとに細かい手口は異なるものの、共通して見られるのは、企業が業務で正規に使っているリモート管理・監視（RMM）ツールを悪用する点、盗んだ認証情報でログインする点、そして人間が実際にキーボードを操作しながらネットワーク内部を移動する「ハンズオンキーボード」型の手口を使う点だ</li>
<li>「Citrix Bleed 2」は2025年に報告された脆弱性だが、パッチ未適用の環境が今も残っており、ランサムウェア集団の初期侵入口として使われ続けている。VPN製品などの脆弱性は公開から時間が経っても悪用が続くケースが多く、パッチ適用状況の定期確認が欠かせない</li>
</ul>
<h2>スパイ集団ToddyCatの新マルウェア「Umbrij」——OAuth悪用で企業のGmailを盗聴</h2>
<ul>
<li>国家に関与するとみられるサイバースパイ集団「ToddyCat」が使う新型マルウェア「Umbrij」が、セキュリティ企業Kasperskyの調査で明らかになった。被害者に気づかれないまま、メールのやり取りを継続的に盗み見ることを目的としている</li>
<li>Kasperskyによれば、今回の攻撃キャンペーンでは特に企業が使うGmail（Google Workspace）のメールが標的にされ、Googleの認証の仕組み「OAuth」を悪用してAPI（アプリ同士が連携する仕組み）経由でアクセス権を奪う手口が使われた</li>
<li>パスワードを直接盗むのではなく、一度認可されたOAuthのアクセス権を悪用する手口のため、通常のログイン監視では気づきにくい。心当たりのないアプリ連携が自分のGoogleアカウントに許可されていないか、定期的に確認することが有効な対策になる</li>
</ul>
<h2>Cisco・Microsoft SharePointの既知の脆弱性が実際の攻撃で悪用開始——連邦機関に緊急パッチ命令</h2>
<ul>
<li>企業の電話会議基盤「Cisco Unified Communications Manager（Unified CM）」に存在する脆弱性（CVE-2026-20230、リクエスト偽造の一種）について、Ciscoは6月のパッチ公開時点では実際の悪用を確認していなかったが、7月2日になって「6月中に実際の悪用があった」と正式に認めた。セキュリティ企業Shadowserverの調査では200台以上のUnified CMがインターネットに露出しており、アジアと北米に集中している。修正版（14SU6、および9月提供予定の15SU5）が出るまでは、脆弱なWebDialer機能を無効化することが推奨されている</li>
<li>Microsoft SharePointの脆弱性（CVE-2026-45659、外部から渡されたデータの処理に起因する遠隔コード実行）についても、米CISAが7月2日に実際の悪用を確認したと警告した。Shadowserverの調査ではインターネット上に1万台以上のSharePointサーバーが露出しており、パッチ適用状況が不明なものが多い。CISAは米連邦機関に対し7月5日（土）までのパッチ適用を義務付けた</li>
<li>どちらも「パッチは出ているのに悪用が始まってから対応が追いつかない」という典型例。自社や取引先がこれらの製品を使っている場合は、パッチ適用状況を至急確認すべきだ</li>
</ul>
<h2>わずか3秒でMicrosoft 365アカウント乗っ取り——「ClickFix」対策にOperaが新機能「Paste Protect」</h2>
<ul>
<li>Microsoft 365を狙う新しい手口「ConsentFix」が確認された。DropboxやDocSendの共有リンクを装ったフィッシングから始まり、本物そっくりのMicrosoft認証画面を表示したうえで、ユーザーに「ローカル回線をブラウザにドラッグする」という一見無害な操作をさせることで、裏側でMicrosoft 365のログイン後に発行される認証トークン（OAuthトークン）を盗み取る</li>
<li>この手口は、ログイン時に一度発行されたセッションそのものを盗むため、パスワードや多要素認証（MFA）を突破する必要がない。CAPTCHA認証やCookie同意など、普段何気なく行っている操作の延長線上で被害に遭ってしまう点が特徴で、「わずか3秒」でアカウントが乗っ取られると報告されている</li>
<li>同じ系統の手口「ClickFix」（偽の検証画面でユーザーに悪意あるコマンドをコピーさせ、実行させる手口）への対策として、ブラウザのOperaが新機能「Paste Protect」を導入した。コピーされた内容を自動でスキャンし、悪意あるパターンを検知するとペースト操作をブロック、警告アイコンとポップアップを表示する。デフォルトで有効になっており、信頼するサイトはホワイトリストに登録できる</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security「Lawmakers Demand Answers as CISA Tries to Contain Data Leak」 https://krebsonsecurity.com/2026/05/lawmakers-demand-answers-as-cisa-tries-to-contain-data-leak/</li>
<li>Bleeping Computer「Medtronic notifies customers impacted by ShinyHunters data breach」 https://www.bleepingcomputer.com/news/security/medtronic-notifies-customers-impacted-by-shinyhunters-data-breach/</li>
<li>The Hacker News「AI Agent Exploits Langflow RCE to Automate Database Ransomware Attack」 https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html</li>
<li>The Hacker News「Ransomware Groups Turn to Citrix Bleed 2, BYOVD, and Supply Chain Credentials」 https://thehackernews.com/2026/07/ransomware-groups-turn-to-citrix-bleed.html</li>
<li>The Hacker News「ToddyCat-Linked Umbrij Malware Abuses OAuth to Access Gmail via Google API」 https://thehackernews.com/2026/07/toddycat-linked-umbrij-malware-abuses.html</li>
<li>Bleeping Computer「Cisco finally confirms attackers exploiting Unified CM flaw」 https://www.bleepingcomputer.com/news/security/cisco-finally-confirms-attackers-exploiting-unified-cm-flaw/</li>
<li>Bleeping Computer「CISA: Microsoft SharePoint RCE flaw now actively exploited」 https://www.bleepingcomputer.com/news/security/cisa-microsoft-sharepoint-rce-flaw-now-actively-exploited/</li>
<li>Bleeping Computer「ConsentFix and ClickFix: How Microsoft 365 Accounts are Hijacked in 3 Seconds」 https://www.bleepingcomputer.com/news/security/consentfix-and-clickfix-how-microsoft-365-accounts-are-hijacked-in-3-seconds/</li>
<li>Bleeping Computer「Opera rolls out Paste Protect feature to fight ClickFix attacks」 https://www.bleepingcomputer.com/news/security/opera-rolls-out-paste-protect-feature-to-fight-clickfix-attacks/</li>
</ul>

</details>

---

[← 2026-07-03 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
