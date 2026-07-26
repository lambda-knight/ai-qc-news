---
title: "生産停止ランサムウェア、ClickFix、AIエージェント注入を防ぐ【セキュリティニュース 2026/07/17】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 生産停止ランサムウェア、ClickFix、AIエージェント注入を防ぐ【セキュリティニュース 2026/07/17】

**2026-07-17 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-17-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-17-security)

---

## 概要

Fairlifeのランサムウェア被害、n8nの認証欠陥、ClickFixを使うTELEPUZ、macOSを狙うClickLock、AIエージェントへのデータ注入を解説します。

▼ 今日のトピック
・Fairlifeの生産停止
・n8nのJWT認証欠陥
・TELEPUZとClickFix
・ClickLockの偽パスワード画面
・AIエージェントへのデータ注入

▼ 参考記事・ソース
・Fairlife https://www.bleepingcomputer.com/news/security/coca-cola-says-fairlife-ransomware-attack-halts-us-dairy-production/
・n8n https://thehackernews.com/2026/07/n8n-token-exchange-flaw-could-let.html
・TELEPUZ https://thehackernews.com/2026/07/new-telepuz-malware-spreads-via.html
・ClickLock https://thehackernews.com/2026/07/new-clicklock-macos-stealer-kills-apps.html

#セキュリティ #ランサムウェア #ClickFix #macOS #AIエージェント #ずんだもん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース：乳製品の操業停止、認証の欠陥、ClickFixとAIエージェント（2026年7月17日）</h1>
<p><strong>キーワード:</strong> ランサムウェア / Fairlife / n8n / ClickFix / macOS / AIエージェント</p>
<h2>Fairlifeへのランサムウェア攻撃、米国の生産に影響</h2>
<ul>
<li>Coca-Colaは、子会社Fairlifeへのランサムウェア攻撃で米国内の製品生産を一時停止したと公表した。ランサムウェアは、データを暗号化するなどして身代金を要求する攻撃である。</li>
<li>食品のような現物の供給網でも、業務システムの停止が生産や物流に波及する。復旧だけでなく、取引先と消費者への正確な情報提供が必要になる。</li>
</ul>
<h2>n8nのトークン交換欠陥：別の利用者としてログインする危険</h2>
<ul>
<li>ワークフロー自動化ツールn8nのEnterprise構成で、複数の外部トークン発行者を信頼する場合、JWTの発行元を十分に確認せず別ユーザーとしてログインできるおそれが報じられた。</li>
<li>影響する構成では、提供元の修正情報を確認し、外部認証の設定と利用者アカウントの対応を点検したい。</li>
</ul>
<h2>TELEPUZ：ClickFixを使う情報窃取マルウェア</h2>
<ul>
<li>TELEPUZは、偽の「確認」手順を見せて利用者にコマンドを貼り付けさせるClickFixの誘導を使い、情報窃取や遠隔操作を狙うマルウェアとして報告された。</li>
<li>ウェブページが端末の問題解決を理由に、ターミナルや実行画面へ文字列を貼り付けるよう求めても、従わないことが基本である。</li>
</ul>
<h2>ClickLock：パスワード入力を迫るmacOS情報窃取型</h2>
<ul>
<li>ClickLockは、偽のシステム画面でパスワードを求め、拒否するとアプリを繰り返し終了させる手口を使うmacOS向け情報窃取型マルウェアとして報じられた。</li>
<li>突然のパスワード要求は、画面の見た目だけで信用しない。公式以外から得たコマンドを実行せず、異常があればネットワークを切り、管理者や公式サポートに相談したい。</li>
</ul>
<h2>AIエージェントへのデータ注入：行動の前に根拠を確認</h2>
<ul>
<li>AIエージェントが読む商品レビューやコード修正のコメントに、攻撃者が偽の情報を混ぜ、誤クリックや不正なコマンド実行を誘う「データ注入」攻撃が報告された。</li>
<li>エージェントに外部サイトを読ませる場合、本文は信頼できない入力として扱う。購入、削除、実行などは人の承認を必須にし、参照元を別経路で確かめたい。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>今日の共通点は、工場の業務システム、ログイン、偽の操作案内、AIエージェントまで、人を急がせて判断を省かせる入口があることだ。</li>
<li>更新とバックアップに加え、命令を貼り付けない、認証設定を確認する、重要操作を人が承認するという基本が被害を小さくする。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>BleepingComputer: Coca-Cola says Fairlife ransomware attack halts US dairy production — https://www.bleepingcomputer.com/news/security/coca-cola-says-fairlife-ransomware-attack-halts-us-dairy-production/</li>
<li>The Hacker News: n8n Token Exchange Flaw Could Let Attackers Log In as Users From Another Issuer — https://thehackernews.com/2026/07/n8n-token-exchange-flaw-could-let.html</li>
<li>The Hacker News: New TELEPUZ Malware Spreads via ClickFix to Steal Data and Run Commands — https://thehackernews.com/2026/07/new-telepuz-malware-spreads-via.html</li>
<li>The Hacker News: New ClickLock macOS Stealer Kills Apps Every 210ms Until Victims Type Their Password — https://thehackernews.com/2026/07/new-clicklock-macos-stealer-kills-apps.html</li>
<li>The Hacker News: New Agent Data Injection Attack Can Make AI Agents Misclick or Run Attacker Commands — https://thehackernews.com/2026/07/new-agent-data-injection-attack-can.html</li>
</ul>

</details>

---

[← 2026-07-17 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
