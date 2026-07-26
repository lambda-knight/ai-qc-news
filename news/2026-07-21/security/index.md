---
title: "570件更新、AIエージェント、VPN認証情報を守る【セキュリティ 2026/07/21】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 570件更新、AIエージェント、VPN認証情報を守る【セキュリティ 2026/07/21】

**2026-07-21 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-21-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-21-security)

---

## 概要

マイクロソフトの570件修正、CISAのGitHub認証情報漏えい、7-ZipのXZ書庫脆弱性、AI開発ツールのサンドボックス回避、FortiGate認証情報漏えいを解説。更新、資産台帳、最小権限、ログ確認へ落とし込みます。

▼ 今日のトピック
・マイクロソフトの570件修正
・公開GitHubに置かれた認証情報
・7-ZipのCVE-2026-14266
・AIエージェントとサンドボックス
・フォーティブリードへの注意

▼ 参考記事・ソース
・Krebs on Security / The Hacker News
・BleepingComputer / JPCERT/CC

#セキュリティ #脆弱性 #パッチ #AIエージェント #FortiGate #ずんだもん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース：更新、認証、AIエージェントの境界（2026年7月21日）</h1>
<p><strong>キーワード:</strong> マイクロソフト / CVE-2026-14266 / フォーティブリード / サンドボックス / ホロウグラフ / パッチ管理</p>
<h2>マイクロソフトの570件修正</h2>
<ul>
<li>マイクロソフトはWindowsなどの少なくとも570件の脆弱性を修正した。先月の記録的な更新件数のほぼ3倍で、AI支援による脆弱性発見の増加も背景として説明された。</li>
<li>件数は危険度の順位ではない。組織は、公開中の端末、外部公開サービス、管理者権限、悪用の有無、業務停止の影響で優先順位を付ける必要がある。</li>
<li>利用者は自動更新の状態を確認し、会社の端末では勝手な再起動を避けて管理部門の手順に従う。更新が成功したかの確認までが対策である。</li>
</ul>
<h2>CISAのGitHub認証情報漏えい</h2>
<ul>
<li>米CISAの委託先が、AWSガブクラウドの鍵を含む内部認証情報を公開GitHubに置き、ほぼ6か月後まで通知されなかった事例の検証が公表された。</li>
<li>公開したファイルを消しても、コピーされた鍵は消えない。無効化、再発行、依存サービスの切替、利用ログの確認を並行する必要がある。</li>
<li>組織は秘密情報の所有者、用途、緊急連絡先を平時から対応付け、公開リポジトリと履歴を継続監視する。通知を受けるだけでなく、担当者が期限内に処理する仕組みが要る。</li>
</ul>
<h2>7-ZipのXZ書庫脆弱性</h2>
<ul>
<li>7-Zip 26.02より前では、細工されたXZ書庫を開くとコード実行につながる可能性がある脆弱性、CVE-2026-14266が報じられた。修正は6月25日に公開された26.02に含まれる。</li>
<li>書庫は安全な入れ物に見えるが、展開処理は外部から受け取ったデータを読む作業である。送信者が知人に見えても、更新前の端末では添付ファイルを安易に開かない。</li>
<li>個人はバージョン更新、組織は対象端末の棚卸しと配布確認を行う。脆弱性番号、影響するバージョン、修正版、悪用の兆候を一組で記録する。</li>
</ul>
<h2>AI開発ツールのサンドボックス回避</h2>
<ul>
<li>カーソル、コーデックス、ジェミニCLI、アンチグラビティで、AIエージェントが書いたファイルを信頼されたホスト側ツールが実行する経路を利用したサンドボックス回避が報じられた。</li>
<li>サンドボックスは隔離された作業場所だが、隔離外の道具が生成物を自動実行すれば境界は崩れる。AIにファイル作成を許すことと、ホストで実行を許すことは別の権限である。</li>
<li>対策は更新だけで終わらない。自動実行を止め、生成物を人が確認し、最小権限の環境で試し、CIの秘密情報を渡さない設計が判断材料になる。</li>
</ul>
<h2>FortiGate認証情報の漏えい</h2>
<ul>
<li>JPCERT/CCは、フォーティネットのFortiGateなどに関係する認証情報が漏えいしたとされる「フォーティブリード」について注意喚起した。報告では194か国、8万6644台以上の機器のログイン情報が含まれるとされた。</li>
<li>漏えいした可能性がある認証情報は、パスワードを変えるだけでは評価が終わらない。外部公開の有無、管理者アカウント、VPN設定、ログイン履歴、不審な設定変更を確認する必要がある。</li>
<li>管理者は公式助言を確認し、認証情報の更新と不要な公開の停止を優先する。機器の機種・バージョン・管理窓口を台帳化しておくと緊急時に動ける。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>今回の共通点は、更新の件数、公開された鍵、書庫、AI生成物、VPN機器という入口の違いにかかわらず、資産の把握と権限の境界が防御の土台になることだ。</li>
<li>個人は更新と不審な書庫を開かない習慣を、組織は端末台帳、秘密情報の失効手順、外部公開資産、ログ確認を整えたい。</li>
</ul>
<h2>エンディング</h2>
<ul>
<li>明日も、怖い見出しを行動可能な確認項目へ翻訳していく。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li><a href="https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/">Microsoft Patches a Record 570 Security Flaws（Krebs on Security）</a></li>
<li><a href="https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak/">Lessons Learned from CISA’s Recent GitHub Leak（Krebs on Security）</a></li>
<li><a href="https://thehackernews.com/2026/07/new-7-zip-vulnerability-could-let.html">New 7-Zip Vulnerability Could Let Crafted XZ Archives Run Code（The Hacker News）</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/cursor-codex-gemini-cli-antigravity-hit-by-sandbox-escapes/">Cursor, Codex, Gemini CLI, Antigravity hit by sandbox escapes（BleepingComputer）</a></li>
<li><a href="https://www.jpcert.or.jp/at/2026/at260019.html">Fortinet製品に関連する認証情報の漏えい（JPCERT/CC）</a></li>
</ul>

</details>

---

[← 2026-07-21 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
