---
title: "セキュリティニュース 2026-06-27"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-27

**2026-06-27 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-27-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-27-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026-06-27</h1>
<h2>ロシア諜報機関、Signalのバックアップ回復キーを狙うフィッシングに進化</h2>
<ul>
<li>FBIとCISA（米サイバーセキュリティ・インフラセキュリティ庁）が共同警告を更新し、ロシア諜報機関によるSignalユーザーへのフィッシング攻撃が新段階に進化したと発表した</li>
<li>攻撃者は今や「Signalバックアップ回復キー（アカウント全履歴を別端末に復元するための秘密コード）」を騙し取る手口を使用しており、一度渡すとすべての過去メッセージへのアクセスと完全なアカウント乗っ取りが可能になる</li>
<li>外交官・ジャーナリスト・政府関係者など機密情報を扱う人物が主な標的で、バックアップ回復キーは絶対に他人に渡さないこと、デバイスを変える場合は旧端末で必ずキーを無効化することが推奨される</li>
</ul>
<h2>DirtyClone：Linuxカーネルの新たな特権昇格脆弱性が公開実証</h2>
<ul>
<li>CVE-2026-43503（CVSSスコア8.8、深刻度「高」）通称「DirtyClone」が発見され、JFrog Security Researchが6月25日に実際に動作するエクスプロイト手順を初公開した</li>
<li>DirtyDupやDirtyFragと同じ系統の脆弱性で、ローカルの一般ユーザーがクローンされたネットワークパケット（通信データの複製）経由でファイルバックメモリを破壊し、root（最高管理者権限）を取得できる</li>
<li>パッチはLinuxカーネルのメインラインにすでにマージされており、各Linuxディストリビューション（Ubuntu・Red Hat等）のアップデートを速やかに適用することが急務だ</li>
</ul>
<h2>pedit COW：Linuxカーネルの別の穴でもroot権限取得可能に</h2>
<ul>
<li>CVE-2026-46331（通称「pedit COW」）はLinuxカーネルのトラフィック制御サブシステムにある境界外書き込みの脆弱性で、CVEアサイン翌日に実際に動作するエクスプロイトが公開された</li>
<li>一般権限ユーザーがカーネルの共有ページキャッシュメモリ（OSが複数プロセスで共有するメモリ領域）を破壊してroot権限を奪える仕組みで、Red Hatは深刻度「高」と評価した</li>
<li>DirtyCloneとpedit COWが同時期に公開されたことで、Linuxシステム管理者は今週末にかけてカーネルアップデートを最優先対応とすることが強く推奨される</li>
</ul>
<h2>Amazon Q Developer の脆弱性：悪意あるリポジトリを開くだけでクラウド認証情報が盗まれる</h2>
<ul>
<li>AIコーディングアシスタント「Amazon Q Developer」にCVSS 8.5の高危険度脆弱性（CVE-2026-12957）が発見され、悪意あるリポジトリを開きワークスペースを信頼するだけで、攻撃者に端末上のコマンド実行とAWSクラウド認証情報（アクセスキー等）の窃取を許す欠陥があった</li>
<li>脆弱性はAIコーディングツールがMCP（Model Context Protocol：AIツールが外部サービスと連携するための標準仕様）サーバーを処理する際の実装に潜んでいた</li>
<li>Amazonはパッチを公開済みで修正完了。AIコーディングツールを使う開発者は定期的なツールアップデートと、不審なリポジトリを信頼するワークスペースとして開かないことが重要だ</li>
</ul>
<h2>Polymarket サプライチェーン攻撃：300万ドルの被害、全額補償へ</h2>
<ul>
<li>予測市場プラットフォーム「Polymarket」が、第三者ベンダー（外部委託業者）への侵害を経由したサプライチェーン攻撃（ソフトウェアの供給経路を狙う手口）を受け、攻撃者がフロントエンド（ユーザーが見るウェブ画面）に悪意あるスクリプトを埋め込んだ</li>
<li>この不正スクリプトにより顧客約300万ドル相当の資産が盗まれたが、Polymarketは全額自社負担での補償を発表した</li>
<li>サプライチェーン攻撃は直接攻撃が難しいサービスの「弱い輪」を狙う手口で、外部ベンダーのセキュリティ監査と、フロントエンドリソースの整合性チェック（CSP・SRI等）の実装が防御の要点だ</li>
</ul>
<h2>セキュリティ企業を狙うOpenAI偽組織フィッシング：機密情報を引き出す新手口</h2>
<ul>
<li>攻撃者が正規企業になりすましたOpenAIテナント（組織アカウント）を作成し、ターゲット企業の社員を偽組織に招待するフィッシング攻撃が確認された</li>
<li>招待を受け入れた社員がChatGPTのような感覚で業務情報をチャットに入力したり、プロジェクトにアップロードしたりすることで、機密情報が攻撃者の管理するOpenAI組織に流出する仕組みだ</li>
<li>セキュリティ企業が主な標的とされており、AIツールの組織招待を受ける際は送信元の正当性を必ず確認し、業務利用する生成AIサービスは会社が管理する公式テナントに限定することが重要だ</li>
</ul>
<h2>Fortinet製品「FortiBleed」：8万6千台超のFortiGateの認証情報が漏洩</h2>
<ul>
<li>JPCERT/CCが緊急注意喚起を発表。Fortinet製FortiGate等のファイアウォールから認証情報が大規模に漏洩した事案（通称「FortiBleed」）で、海外セキュリティベンダーSOCRadarが194カ国・8万6644台以上の機器のログイン情報が攻撃者のデータベースに含まれていることを確認した</li>
<li>過去の脆弱性（CVE-2022-40684等）を悪用して取得した情報が今も転売・悪用され続けており、数年前にパッチ適用済みの組織でも流出情報が使い回される危険がある</li>
<li>FortiGate管理者はパスワードの即時変更・管理インターフェースへのアクセス制限・ファームウェアの最新化を行うとともに、JPCERT/CCの注意喚起を参照した詳細確認が強く推奨される</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li><a href="https://thehackernews.com/2026/06/fbi-warns-russian-intelligence-hackers.html">FBI Warns Russian Intelligence Hackers Target Signal Backup Recovery Keys</a> - The Hacker News</li>
<li><a href="https://www.bleepingcomputer.com/news/security/fbi-russian-hackers-now-target-signal-backup-recovery-keys/">FBI: Russian hackers now target Signal backup recovery keys</a> - Bleeping Computer</li>
<li><a href="https://thehackernews.com/2026/06/new-dirtyclone-linux-kernel-flaw-lets.html">New DirtyClone Linux Kernel Flaw Lets Local Users Gain Root via Cloned Packets</a> - The Hacker News</li>
<li><a href="https://thehackernews.com/2026/06/new-linux-pedit-cow-exploit-enables.html">New Linux pedit COW Exploit Enables Root Access by Poisoning Cached Binaries</a> - The Hacker News</li>
<li><a href="https://thehackernews.com/2026/06/amazon-q-developer-flaw-could-let.html">Amazon Q Developer Flaw Could Let Malicious Repos Run Code via MCP Configs</a> - The Hacker News</li>
<li><a href="https://www.bleepingcomputer.com/news/security/polymarket-customers-lose-3-million-in-supply-chain-attack/">Polymarket customers lose $3 million in supply-chain attack</a> - Bleeping Computer</li>
<li><a href="https://www.bleepingcomputer.com/news/security/cybersecurity-firms-targeted-by-fraudulent-openai-organization-invites/">Cybersecurity firms targeted by fraudulent OpenAI organization invites</a> - Bleeping Computer</li>
<li><a href="https://www.jpcert.or.jp/at/2026/at260019.html">Fortinet製品に関連する認証情報の漏えいに関する注意喚起</a> - JPCERT/CC</li>
</ul>

</details>

---

[← 2026-06-27 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
