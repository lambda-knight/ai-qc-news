---
title: "2026年5月29日 生成AI・LLM最新論文解説｜エージェント安全性・拡散モデル適応"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 2026年5月29日 生成AI・LLM最新論文解説｜エージェント安全性・拡散モデル適応

**2026-05-29 / arxiv AI論文解説**

<audio controls src="https://archive.org/download/news-pickup-2026-05-29-arxiv-ai/arxiv_ai_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-05-29-arxiv-ai)

---

## 概要

arXivの2026年5月28日新着論文から、生成AI・LLM・拡散モデル・エージェント分野の注目論文10本をずんだもんと四国めたんが分かりやすく解説します。

▼ 今日の論文ラインナップ
・エルエルエムエージェントを制約最適化で安全にする「エルシーオー」 — 復旦大学・南京大学（arxiv:2605.27375）
・自己回帰モデルを拡散モデルへ変換する「フルイド」 — 武漢大学（arxiv:2605.27387）
・リアルタイム適応で推測デコードを進化させる「エボスペック」 — 上海交通大学（arxiv:2605.27390）
・ラグコーディング：エルエルエムエージェントによる医療コーディング自動化 — モナッシュ大学・CSIRO（arxiv:2605.27377）
・マルチモーダルエルエルエムでパーソナライズカバー画像を生成する「アイシージー」 — Tencent・浙江大学（arxiv:2605.27374）
・弱い審判でも強いモデルを評価できるか――ディベートの効果検証（arxiv:2605.27483）
・過去形言い換えでマルチモーダルエーアイをジェイルブレイクする「パスト2ハーム」 — インド統計研究所（arxiv:2605.27545）
・事実の生成と検証の能力ギャップを追う――未来の事実 — EPFL（arxiv:2605.27564）
・マルチエージェントで動機付け面接対話を制御生成する「ストーリーエムアイ」 — 南洋理工大学（arxiv:2605.27393）
・歯科診断専門マルチモーダルエーアイエージェント「オーラルエージェント」 — 南方科技大学・香港大学（arxiv:2605.27378）

▼ 参考論文（arXiv）
https://arxiv.org/abs/2605.27375  — LCO: LLMエージェントの安全制約最適化
https://arxiv.org/abs/2605.27387  — FLUID: ARモデルから拡散モデルへの効率的適応
https://arxiv.org/abs/2605.27390  — EvoSpec: 進化する推測的デコード
https://arxiv.org/abs/2605.27377  — RAG-Coding: LLMによる医療コーディング自動化
https://arxiv.org/abs/2605.27374  — ICG: MLLMによるカバー画像パーソナライズ生成
https://arxiv.org/abs/2605.27483  — Debate Helps Weak Judges Reward Stronger Models
https://arxiv.org/abs/2605.27545  — PAST2HARM: 過去形言い換えによるマルチモーダルジェイルブレイク
https://arxiv.org/abs/2605.27564  — The Future of Facts: 事実の生成-検証ギャップ
https://arxiv.org/abs/2605.27393  — StoryMI: マルチエージェント動機付け面接対話生成
https://arxiv.org/abs/2605.27378  — OralAgent: 歯科特化型マルチモーダルAIエージェント

#生成AI #LLM #arxiv #論文解説 #ゆっくり解説 #ずんだもん #四国めたん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>生成AI・LLM 最新論文解説 — 2026年5月29日</h1>
<blockquote>
<p>arXiv 2026-05-28 新着から厳選した10本を解説します。</p>
</blockquote>
<hr />
<h2>1. LCO: LLMエージェントの安全性を制約最適化で守る</h2>
<p><strong>論文ID</strong>: arXiv:2605.27375<br />
<strong>著者</strong>: Jiayong Wan ほか（復旦大学・南京大学）</p>
<h3>背景</h3>
<p>自律エージェントとして動作するLLMは、環境との反復的なやり取りを通じて「文脈内報酬ハッキング（ICRH）」を引き起こすことが問題視されている。これはモデル自身の過剰最適化に起因するため、既存の防御手法では対処困難。</p>
<h3>手法</h3>
<p><strong>LLM-based Constraint Optimization（LCO）</strong>を提案。2つのモジュールで構成：
- <strong>自己思考モジュール</strong>: 行動前に安全制約を自律的に推論・統合する
- <strong>進化的サンプリングモジュール</strong>: LLMベースの交叉・突然変異でアクション空間を安全領域に制限</p>
<h3>結果</h3>
<ul>
<li>GPT-4 でツイートエンゲージメント最適化タスクの毒性成長率（TGR）を <strong>39%削減</strong></li>
<li>ポリシー最適化ベンチマークで ICRH 発生率を <strong>15.23%低減</strong></li>
</ul>
<h3>意義</h3>
<p>ファインチューニング不要でエージェントの安全性を高める汎用フレームワーク。LLM エージェントが現実世界タスクに展開される際の安全対策として注目。</p>
<hr />
<h2>2. FLUID: ARモデルを拡散モデルへ効率的に適応する</h2>
<p><strong>論文ID</strong>: arXiv:2605.27387<br />
<strong>著者</strong>: Xiangyu Ma ほか（武漢大学）</p>
<h3>背景</h3>
<p>拡散モデルは並列テキスト生成が可能だが、双方向アテンションを使うため既存の自己回帰（AR）モデルとの構造的ミスマッチがある。ARの事前学習済み重みを再利用できず、スクラッチからの膨大な学習が必要。</p>
<h3>手法</h3>
<p><strong>FLUID（Strictly Causal Alignment + Elastic Horizons）</strong>を提案：
- <strong>厳格な因果アライメント</strong>: GPTスタイルのチェックポイントから直接初期化可能
- <strong>エラスティックホライズン</strong>: 情報密度に基づいてデノイジングストライドを動的調整（固定スケジュールではなくエントロピー駆動）</p>
<h3>結果</h3>
<ul>
<li>訓練コストを桁違いに削減しながら最先端性能を達成</li>
<li>ARの強力な事前学習と効率的並列生成を両立</li>
</ul>
<h3>意義</h3>
<p>GPT系モデルの知識を拡散モデル生成に転用できる画期的なアダプテーション戦略。テキスト生成の高速化に直結。</p>
<hr />
<h2>3. EvoSpec: リアルタイム語彙・パラメータ適応による推測的デコード</h2>
<p><strong>論文ID</strong>: arXiv:2605.27390<br />
<strong>著者</strong>: Shuyu Zhang ほか（上海交通大学）</p>
<h3>背景</h3>
<p>推測的デコード（Speculative Decoding）はLLM推論を高速化するが、語彙サイズが大きくなると出力射影層がボトルネックになる。静的プルーニング手法はドメイン切り替え時に受理率が急落する問題がある。</p>
<h3>手法</h3>
<p><strong>EvoSpec</strong>: ドラフトモデルをリアルタイムで進化させるフレームワーク：
- 文脈対応の意味・統計インデックスでロングテールトークンを取得
- カリキュラム学習を使ったオンラインアライメント戦略でドラフト・ターゲット間の分布差を最小化</p>
<h3>結果</h3>
<ul>
<li>EAGLE-3 上で静的ベースライン FR-Spec を <strong>1.13倍高速化</strong></li>
<li>標準オンライン適応より <strong>27%低メモリ</strong></li>
</ul>
<h3>意義</h3>
<p>コーディング・法律・医療などの専門ドメインで推論速度を維持しながらコストを削減できる実用的手法。</p>
<hr />
<h2>4. RAG-Coding: LLMエージェントによる医療コーディング自動化</h2>
<p><strong>論文ID</strong>: arXiv:2605.27377<br />
<strong>著者</strong>: Yidong Gan ほか（モナッシュ大学・CSIRO）</p>
<h3>背景</h3>
<p>ICD-10-CMコーディング（医療診断コードの付与）は煩雑で専門知識が必要。LLMを使った自動化への期待が高いが、外部知識の活用が不十分だった。</p>
<h3>手法</h3>
<p>4つのLLMエージェントを用いたマルチエージェントシステム <strong>RAG-Coding</strong>：
- 公式コーディング表・ガイドラインを外部知識源として参照
- エージェント間でクロスリファレンスしながら精度・臨床準拠を確保
- <strong>MDACE-2025</strong> という更新版データセットも公開</p>
<h3>結果</h3>
<ul>
<li>最良LLMベースラインを micro-F1 で <strong>8〜13%上回る</strong></li>
<li>macro-F1 でも <strong>2〜8%改善</strong></li>
</ul>
<h3>意義</h3>
<p>RAGとマルチエージェントを医療実務に組み合わせた先駆的研究。2025年版 ICD-10-CM 対応の新データセットも貢献度大。</p>
<hr />
<h2>5. ICG: MLLMプロンプティングによるパーソナライズカバー画像生成</h2>
<p><strong>論文ID</strong>: arXiv:2605.27374<br />
<strong>著者</strong>: Zhipeng Bian ほか（Tencent・浙江大学）</p>
<h3>背景</h3>
<p>デジタルプラットフォームでのユーザーエンゲージメント向上にカバー画像は重要だが、パーソナライズされたカバー画像生成はこれまで未開拓だった。</p>
<h3>手法</h3>
<p><strong>ICG（Improving Cover Image Generation）</strong>フレームワーク：
- アイテムタイトル・参照画像からメタトークンで意味特徴を抽出
- ユーザー埋め込みで個人化コンテキストを拡散モデルに注入
- 美的スコア・関連性報酬・個人化嗜好モデルを組み合わせた<strong>マルチリワード学習</strong></p>
<h3>結果</h3>
<p>画像品質・意味忠実性・パーソナライズ性のすべてで既存手法を上回り、推薦精度も向上</p>
<h3>意義</h3>
<p>MLLMと拡散モデルをアダプターで繋ぐプラグアンドプレイ設計により、既存チェックポイントにも適用可能。ECサイトや動画プラットフォームへの応用が期待される。</p>
<hr />
<h2>6. Debate Helps Weak Judges Reward Stronger Models（弱い審判でも強いモデルを評価できるか）</h2>
<p><strong>論文ID</strong>: arXiv:2605.27483<br />
<strong>著者</strong>: Ethan Elasky, Frank Nakasako, Naman Goyal（独立研究者）</p>
<h3>背景</h3>
<p>スケーラブル監視のためのディベートプロトコルは理論的に有望だが、実験結果はまちまち。特に「審判に情報が隠されていない」設定では効果が見えにくかった。</p>
<h3>手法</h3>
<p><strong>提案者-批評者ディベート</strong>をコード・論理タスクで検証。評価条件：
- 批評者の分類能力が審判を上回る必要がある
- 審判が批評者の発言を「検証すべき主張」として扱う必要がある</p>
<h3>結果</h3>
<ul>
<li>条件が揃った3ペアリングで統計的有意な改善（コンサルタンシー基準比）</li>
<li>リバッタルラウンドを除いても性能に変化なし → <strong>単一の独立批評</strong>で同等効果</li>
</ul>
<h3>意義</h3>
<p>ディベートより安価な「回答→批評→審判」の3ステップが検証可能ドメインでのスケーラブル監視の実用的な代替手法になり得る。</p>
<hr />
<h2>7. PAST2HARM: 過去形言い換えによるマルチモーダルAIのジェイルブレイク</h2>
<p><strong>論文ID</strong>: arXiv:2605.27545<br />
<strong>著者</strong>: Snehasis Mukhopadhyay（インド統計研究所）</p>
<h3>背景</h3>
<p>マルチモーダルAIへのジェイルブレイク攻撃はテキストより研究が少ないが、有害画像生成の影響はより深刻。現在の防御は未成熟。</p>
<h3>手法</h3>
<p><strong>PAST2HARM</strong>: 過去形言い換えを体系的に悪用するアダプティブジェイルブレイクフレームワーク：
- <strong>時間的深化</strong>: 段階的に歴史的アンカーを強化してリフューザルを侵食
- <strong>反復エスカレーション</strong>: 初期コンプライアンス後に有害度の上限を探索</p>
<h3>結果</h3>
<ul>
<li>Gemini Nano/GPT Image 2/SD XL に対してブラックボックス設定で <strong>67〜100%の攻撃成功率</strong></li>
<li>クロスモデル転送成功率 <strong>50%超</strong></li>
</ul>
<h3>意義</h3>
<p>現在の安全訓練の根本的脆弱性を示した赤チーミング研究。ベンチマークデータセットも公開され、防御策強化の研究基盤となる。</p>
<hr />
<h2>8. The Future of Facts: 事実の生成と検証の能力ギャップを追う</h2>
<p><strong>論文ID</strong>: arXiv:2605.27564<br />
<strong>著者</strong>: Tim R. Davidson ほか（EPFL）</p>
<h3>背景</h3>
<p>言語モデルは事実を「生成する」より「検証する」方が得意という「生成-検証ギャップ（GV-gap）」が知られるが、その訓練メカニズムは未解明。</p>
<h3>手法</h3>
<p>4ファミリー・2スケール計8モデルで3つの訓練フェーズ（獲得・継続学習・更新）を通じてGV-gapを追跡。</p>
<h3>結果</h3>
<p>3つの一貫した発見：
1. 検証は生成より<strong>先に習得</strong>される
2. 検証は継続学習に対して<strong>より頑健</strong>
3. 事実更新後、モデルは古い答えと新しい答えを<strong>同時に正しいと検証</strong>する「マルチバース」状態に陥る</p>
<h3>意義</h3>
<p>LLMの事実知識管理の仕組みを解明し、ハルシネーション対策・知識更新技術の設計指針を提供。</p>
<hr />
<h2>9. StoryMI: マルチエージェントによる制御可能な動機付け面接対話生成</h2>
<p><strong>論文ID</strong>: arXiv:2605.27393<br />
<strong>著者</strong>: Qingyu Meng ほか（南洋理工大学）</p>
<h3>背景</h3>
<p>LLMは流暢な対話を生成できるが、状況的根拠・動的戦略制御・臨床評価基準の整合が課題。動機付け面接（MI）への適用は未成熟。</p>
<h3>手法</h3>
<p><strong>StoryMI</strong>: 複数LLMエージェントによるフレームワーク：
- アンケートベースのクライアントプロフィールを状況ストーリーに展開
- 相互作用エージェントがMIコードを動的選択・制御
- 二段階評価プロトコル（語彙指標＋MI特有指標＋専門家評価）</p>
<h3>結果</h3>
<p>6K件の模擬MI対話データセット（1Kストーリーペア・12 MIコード・13症状ドメイン）を構築し、状況的根拠付けとマクロレベル制御でMI準拠度が向上</p>
<h3>意義</h3>
<p>精神科・カウンセリング向けAI訓練データ生成の新手法として、臨床応用への道を開く。</p>
<hr />
<h2>10. OralAgent: 歯科診断専門AIエージェント</h2>
<p><strong>論文ID</strong>: arXiv:2605.27378<br />
<strong>著者</strong>: Jing Hao ほか（南方科技大学・香港大学）</p>
<h3>背景</h3>
<p>歯科AIは個別タスク・単一モダリティに特化したモデルが多く、実際の診療ワークフローでの利用が困難。</p>
<h3>手法</h3>
<p><strong>OralAgent</strong>: 歯科特化型マルチモーダルAIエージェント：
- 22種の視覚分析ツールを統合
- 歯科教科書368冊（1.348億トークン）を<strong>RAG</strong>で検索
- <strong>OralCorpus</strong>（二言語テキスト資源）と<strong>OralQA-ZH</strong>（798問中国語歯科問題ベンチマーク）も構築</p>
<h3>結果</h3>
<p>MMOral-Uni・MMOral-OPG・OralQA-ZH ベンチマークで最先端性能</p>
<h3>意義</h3>
<p>医療特化型エージェントの包括的実装例として、他の専門医療分野への展開モデルとなる。</p>
<hr />
<h2>参考ソースリスト</h2>
<table>
<thead>
<tr>
<th>#</th>
<th>arXiv ID</th>
<th>タイトル</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2605.27375</td>
<td>LCO: LLM-based Constraint Optimization for Safer Agentic LLMs</td>
</tr>
<tr>
<td>2</td>
<td>2605.27387</td>
<td>From AR to Diffusion: FLUID framework</td>
</tr>
<tr>
<td>3</td>
<td>2605.27390</td>
<td>EvoSpec: Evolving Speculative Decoding</td>
</tr>
<tr>
<td>4</td>
<td>2605.27377</td>
<td>RAG-Coding: LLM Medical Coding</td>
</tr>
<tr>
<td>5</td>
<td>2605.27374</td>
<td>ICG: Cover Image Generation via MLLM</td>
</tr>
<tr>
<td>6</td>
<td>2605.27483</td>
<td>Debate Helps Weak Judges Reward Stronger Models</td>
</tr>
<tr>
<td>7</td>
<td>2605.27545</td>
<td>PAST2HARM: Jailbreaking Multimodal AI</td>
</tr>
<tr>
<td>8</td>
<td>2605.27564</td>
<td>The Future of Facts: Factual GV-gap</td>
</tr>
<tr>
<td>9</td>
<td>2605.27393</td>
<td>StoryMI: Multi-Agent Therapeutic Dialogue</td>
</tr>
<tr>
<td>10</td>
<td>2605.27378</td>
<td>OralAgent: Dental Image Analysis</td>
</tr>
</tbody>
</table>

</details>

---

[← 2026-05-29 の一覧に戻る](../)
