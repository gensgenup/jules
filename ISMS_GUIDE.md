# 情報セキュリティマネジメントガイド

## ✨ 1. はじめに
   - **目的:** 本ガイドは、プロジェクトにおける情報セキュリティを確保し、情報資産を適切に保護するための基本ルールを定めることを目的とします。
   - **適用範囲:** 本ガイドは、プロジェクトに関わる全てのメンバー、情報資産、および情報システムに適用されます。
   - **用語の定義:**
     - 情報資産: プロジェクトで取り扱う全ての情報（電子データ、紙媒体など）およびそれに関連する資産（PC、サーバ、ネットワーク機器など）。
     - リスク: 情報資産の機密性、完全性、可用性を脅かす可能性のある事象。
     - ISMS: 情報セキュリティマネジメントシステム (Information Security Management System)。

## 🔐 2. 情報セキュリティ方針
   - **基本方針:** プロジェクトメンバーは、情報セキュリティの重要性を認識し、本ガイドおよび関連規程を遵守します。情報セキュリティに関する事故の予防に努め、万が一事故が発生した場合は、迅速かつ適切に対応します。
   - **推進体制:** プロジェクトマネージャーは、情報セキュリティ管理の責任者として、本ガイドの推進および維持改善に努めます。各メンバーは、自らの役割に応じて情報セキュリティ対策を実践します。
   - **責任と権限:**
     - プロジェクトマネージャー: 情報セキュリティに関する最終責任者。対策の承認、リソースの割り当て。
     - 各メンバー: 割り当てられた情報資産の適切な管理、セキュリティインシデントの報告。

## 💼 3. 情報資産の管理
   - **情報資産の特定と分類:**
     - プロジェクトで取り扱う情報資産を特定し、台帳に記録します。
     - 情報資産を機密性、完全性、可用性の観点から評価し、重要度に応じて分類します（例：機密、社外秘、公開）。
   - **情報資産の取り扱いルール:**
     - 分類された情報資産は、その重要度に応じた取り扱いルールを定めます（例：アクセス制限、持ち出し禁止、暗号化）。
     - 個人情報や顧客情報など、特に重要な情報は法令や契約に従い、厳重に管理します。
   - **リスクアセスメントと管理策:**
     - 情報資産に対する脅威と脆弱性を特定し、リスクを評価します。
     - 評価されたリスクに対して、適切な管理策（回避、低減、移転、受容）を選択し、実施します。
     - リスクアセスメントは定期的に見直し、必要に応じて管理策を更新します。

## 🔑 4. アクセス制御
   - **アカウント管理:**
     - ユーザーアカウントは、業務上必要な最小限の権限で作成し、適切に管理します。
     - 退職や異動等により不要となったアカウントは、速やかに停止または削除します。
     - 共用アカウントの使用は原則禁止とし、必要な場合は承認を得て利用ルールを定めます。
   - **パスワード管理:**
     - パスワードは、推測されにくい複雑なものを設定し、定期的に変更します。
     - 初期パスワードは、初回ログイン時に必ず変更します。
     - パスワードの使いまわしを避け、他人に知られないよう厳重に管理します。
   - **アクセス権限の管理:**
     - 情報資産へのアクセス権限は、業務上の必要性に応じて最小限に設定します。
     - アクセス権限の付与、変更、削除は、承認プロセスを経て実施します。
     - 定期的にアクセス権限の見直しを行い、不要な権限は削除します。

## 🏢 5. 物理的及び環境的セキュリティ
   - **執務エリアの管理:**
     - 執務エリアへの入退室管理を徹底し、権限のない者の立ち入りを制限します。
     - 来訪者に対しては、受付での対応や付き添いを義務付けます。
     - 重要な情報資産や機器が設置されているエリアは、特に厳重な管理を行います。
   - **クリアデスク・クリアスクリーン:**
     - 離席時には、書類や記憶媒体を机上に放置せず、施錠可能な場所に保管します。
     - PCの画面は、離席時にパスワード付きスクリーンセーバーで保護するか、ログオフします。
     - 会議室や共有スペース利用後も同様に、情報を残さないようにします。
   - **書類及び記憶媒体の管理:**
     - 機密情報を含む書類や記憶媒体は、施錠可能なキャビネット等で保管します。
     - 不要になった書類や記憶媒体は、シュレッダー処理や物理的破壊など、適切な方法で廃棄します。
     - 記憶媒体の持ち出し・持ち込みは、原則禁止とし、必要な場合は承認を得てルールに従います。

## ⚙️ 6. オペレーションセキュリティ
   - **マルウェア対策:**
     - 全てのPCおよびサーバに、最新の定義ファイルを持つウイルス対策ソフトを導入し、定期的なスキャンを実施します。
     - 不審なメールの添付ファイルやURLは開かず、ソフトウェアは信頼できる提供元からのみ入手します。
     - USBメモリ等の外部記憶媒体は、使用前に必ずウイルスチェックを行います。
   - **バックアップ:**
     - 重要な情報資産は、定期的にバックアップを取得し、安全な場所に保管します。
     - バックアップデータからのリストア手順を定め、定期的にテストを実施します。
     - バックアップ媒体の管理ルール（保管場所、保管期間等）を定めます。
   - **ログ管理:**
     - システムの操作ログ、アクセスログ、エラーログ等を記録し、定期的に確認します。
     - ログは改ざんや不正アクセスから保護し、必要な期間保管します。
     - 不正アクセスやセキュリティインシデントの追跡調査にログを活用します。

## 📡 7. 通信セキュリティ
   - **ネットワーク管理:**
     - ネットワーク機器（ルータ、スイッチ、ファイアウォール等）は適切に設定し、不正アクセスから保護します。
     - 無線LANの利用には、適切な暗号化（WPA2/3等）と認証を設定します。
     - 不要なネットワークサービスやポートは無効化します。
   - **情報の伝送:**
     - 機密情報をネットワーク経由で伝送する場合は、暗号化（SSL/TLS、VPN等）を行います。
     - 電子メールで機密情報を送信する際は、ファイル暗号化やパスワード保護を検討します。
     - 公衆無線LANなど、セキュリティレベルの低いネットワークでの機密情報の取り扱いは避けます。

## 💻 8. システムの取得、開発及び保守
   - **開発におけるセキュリティ:**
     - システム開発の初期段階からセキュリティ要件を定義し、設計に組み込みます（セキュアバイデザイン）。
     - セキュアコーディング標準を導入し、開発者はこれを遵守します。
     - 開発環境と本番環境を分離し、本番データは開発環境で原則使用しません。
   - **テストデータの管理:**
     - テストデータに個人情報や機密情報が含まれる場合は、マスキングや匿名化を施します。
     - テスト完了後は、テストデータを適切に削除または破棄します。
   - **脆弱性管理:**
     - システム導入前および定期的に脆弱性診断を実施し、発見された脆弱性には速やかに対処します。
     - OSやソフトウェアのセキュリティパッチは、速やかに適用します。
     - 脆弱性情報を収集し、関連するリスクを評価します。

## 🤝 9. サプライヤ関係
   - **サプライヤ選定時のセキュリティ要求事項:**
     - サプライヤに対して、本プロジェクトの情報セキュリティ基準を伝え、遵守を求めます。
     - サプライヤの情報セキュリティ体制や実績を評価し、選定基準に含めます。
   - **契約におけるセキュリティ:**
     - サプライヤとの契約には、情報セキュリティに関する条項（機密保持、目的外利用の禁止、再委託の制限、事故発生時の報告義務等）を盛り込みます。
     - サプライヤがアクセスする情報資産の範囲を明確にします。
   - **サプライヤの監視及びレビュー:**
     - サプライヤの情報セキュリティ対策の実施状況を定期的に監視し、レビューします。
     - 必要に応じて、サプライヤに対する監査を実施します。
     - 契約違反やセキュリティインシデントが発生した場合は、契約に基づき適切に対応します。

## 🚨 10. 情報セキュリティインシデント管理
    - **インシデントの報告体制:**
      - セキュリティインシデント（情報漏洩、不正アクセス、マルウェア感染等）を発見または認識した場合の報告手順と連絡先を定めます。
      - 全てのメンバーは、インシデント発生時には速やかに所定の連絡先に報告する義務があります。
    - **インシデントの対応手順:**
      - インシデント発生時の対応手順（初動対応、影響範囲の特定、封じ込め、復旧、証拠保全等）を明確にします。
      - インシデント対応チームを編成し、役割分担を定めておくことが望ましいです。
    - **インシデントからの学習:**
      - インシデント対応後、原因を分析し、再発防止策を策定します。
      - 対応手順や管理策の見直しを行い、必要に応じて改善します。
      - インシデントの記録を保管し、教訓として共有します。

## 🔄 11. 変更管理 (Change Management)
   - **目的:** 情報資産、情報処理施設、およびシステムに対する全ての変更を管理し、情報セキュリティインシデントや運用中断のリスクを最小限に抑えることを目的とします。
   - **適用範囲:** 本プロジェクトにおけるハードウェア、ソフトウェア、ネットワーク設定、システム構成、および重要な文書類（本ガイド自身を含む）の全ての変更に適用されます。
   - **変更管理プロセス:**
     - **変更要求:**
       - 全ての変更は、所定の変更要求フォーム（またはシステム）を通じて正式に申請されなければなりません。
       - 変更要求には、変更の目的、内容、期待される効果、提案される実施時期、および既知のリスクが含まれるべきです。
     - **評価とリスクアセスメント:**
       - 提出された変更要求は、情報セキュリティ担当者および関連する技術担当者によって評価されます。
       - 変更が情報セキュリティ、運用、およびビジネスプロセスに与える潜在的な影響（メリット、デメリット、リスク）を特定し、評価します。特にセキュリティリスクについては詳細なアセスメントを実施します。
       - 緊急変更でない限り、テスト計画やバックアウト（切り戻し）計画もこの段階で検討されます。
     - **承認:**
       - 評価結果に基づき、プロジェクトマネージャーまたは指名された変更承認者（Change Approval Board - CAB のような役割を想定）が変更の実施を承認または却下します。
       - 承認の記録は保管されなければなりません。
       - 緊急変更の場合は、事後承認も許容されることがありますが、そのプロセスも明確に定義されるべきです。
     - **計画とテスト:**
       - 承認された変更は、詳細な実施計画（手順、担当者、スケジュール）が作成されます。
       - 可能な限り、本番環境に影響を与えないテスト環境で変更内容のテストを実施し、期待通りに動作すること、および予期せぬ問題が発生しないことを確認します。
       - バックアウト計画（変更に失敗した場合や問題が発生した場合に元の状態に戻す手順）を準備します。
     - **実施:**
       - 変更は、承認された計画に従い、影響を最小限に抑えるよう慎重に実施されます。
       - 変更作業中は、関連するログを記録し、進捗を監視します。
     - **レビューとクローズ:**
       - 変更実施後、変更が成功し、意図した目的を達成したかを確認します。
       - 変更によって新たな問題が発生していないかを確認します。
       - 変更の結果を文書化し、変更記録を更新します。
       - 関係者に変更の完了を通知します。
   - **役割と責任:**
     - **変更要求者:** 変更の必要性を特定し、変更要求を提出する。
     - **情報セキュリティ担当者:** 変更のセキュリティリスクを評価し、対策を助言する。
     - **技術担当者:** 変更の技術的な実現可能性と影響を評価し、実施計画を作成・実行する。
     - **変更承認者 (例: プロジェクトマネージャー):** 変更要求を評価し、承認または却下する最終責任を持つ。
     - **変更実施者:** 承認された変更計画に基づき、変更作業を実施する。
   - **緊急変更:**
     - 通常の変更プロセスを経る時間がない緊急事態（例：重大なセキュリティ脆弱性の修正、システム障害からの復旧）においては、限定的な評価と口頭での承認に基づき変更を実施することができます。
     - 緊急変更は、実施後速やかに通常の変更管理プロセスに従って文書化され、レビューされなければなりません。
   - **変更の記録:**
     - 全ての変更要求、評価結果、承認記録、テスト結果、実施記録、およびレビュー結果は、変更ログとして記録・保管されなければなりません。
     - この変更ログは、定期的にレビューされ、監査の対象となります。

## 🐞 12. 問題管理 (Problem Management)
   - **目的:** 情報セキュリティインシデントの根本原因を特定し、解決することにより、インシデントの再発を防止し、ITシステムの品質と信頼性を向上させることを目的とします。問題とは、一つ以上のインシデントの未知の根本原因を指します。
   - **適用範囲:** 本プロジェクトで発生した全ての情報セキュリティインシデント、および運用上検知された潜在的な問題に適用されます。
   - **問題管理プロセス:**
     - **問題の識別と記録:**
       - 繰り返し発生するインシデント、重大な単一インシデント、または傾向分析から問題を識別します。
       - 識別された問題は、問題記録として登録され、内容、発生日時、関連するインシデント情報などが記録されます。
     - **問題の分類と優先度付け:**
       - 問題は、影響範囲、緊急度、およびビジネスへの影響に基づいて分類され、対応の優先度が決定されます。
     - **問題調査と根本原因分析 (RCA):**
       - 記録された問題に対して、体系的な調査と根本原因分析を実施します。
       - 根本原因を特定するために、関連するログの分析、再現テスト、関係者へのヒアリングなどが行われます。
     - **回避策の策定と実施:**
       - 根本原因の恒久的な解決策がすぐに見つからない場合、インシデントの影響を軽減するための回避策（ワークアラウンド）を策定し、実施します。
       - 回避策は一時的な措置であり、その利用状況は監視されます。
     - **既知の誤り (Known Error) の記録:**
       - 根本原因が特定され、回避策または恒久的な解決策が見つかった問題は、「既知の誤り」として記録されます。
       - 既知の誤りデータベース（KEDB）を整備し、インシデント対応や将来の問題解決に活用します。
     - **解決策の策定と実装:**
       - 根本原因を解決するための恒久的な対策を策定します。
       - 解決策の実装がシステムや構成の変更を伴う場合は、変更管理プロセスを通じて実施されます。
     - **問題のクローズとレビュー:**
       - 解決策が実装され、問題が解決されたことを確認した上で、問題記録をクローズします。
       - 問題対応の有効性をレビューし、得られた教訓を将来のプロセス改善に活かします。
   - **役割と責任:**
     - **インシデント対応チーム/各メンバー:** インシデント対応中に潜在的な問題を識別し、報告する。
     - **問題管理者 (または指名された担当者):** 問題管理プロセス全体の推進、問題記録の管理、根本原因分析の調整、解決策の追跡を担当する。
     - **技術専門家/関係者:** 根本原因分析、回避策の策定、解決策の提案と実装に協力する。
     - **プロジェクトマネージャー:** 問題管理に必要なリソースを確保し、重要な問題の解決を支援する。
   - **問題管理とインシデント管理の関係:**
     - インシデント管理は、サービスの迅速な復旧を目的とします。
     - 問題管理は、インシデントの根本原因を特定し、恒久的な解決策を提供することで再発を防止することを目的とします。
   - **問題の記録と報告:**
     - 全ての問題記録、調査結果、根本原因分析の報告、既知の誤りの記録、および解決策の詳細は文書化され、保管されなければなりません。
     - 重大な問題については、定期的にプロジェクトマネージャーおよび関係者に報告されます。

## ♻️ 13. 事業継続マネジメント
    - **事業継続計画の策定:**
      - 重大な災害やシステム障害等が発生した場合でも、重要業務を継続または早期に復旧するための事業継続計画（BCP）を策定します。
      - BCPには、目標復旧時間（RTO）、目標復旧地点（RPO）、代替手段、緊急連絡体制等を含めます。
      - 緊急連絡網と通信手順
      - 被害状況評価の手順
      - 重要な業務機能およびITシステムの復旧戦略
      - 障害発生時の役割と責任
    - **事業継続計画のテストとレビュー:**
      - BCPの実効性を確認するため、定期的にテスト（訓練）を実施します。
      - テスト結果や状況の変化（組織体制、業務内容、システム構成等）を踏まえ、BCPを定期的にレビューし、更新します。
      - テストの種類（例：机上訓練、シミュレーション、全体訓練）
      - レビューのきっかけ（例：重大なインシデント後、事業運営の変更、規制の変更）
    - **重大システム停止時における経営委員会への報告手順:**
      - 即時通知: 重大なシステム停止が発生した場合、速やかに経営委員会に第一報を通知します。
      - 定期報告: 状況、影響評価、および復旧進捗について、経営委員会へ定期的に最新情報を提供します。
      - 事後報告: インシデント収束後、原因、実施された対策、および教訓を詳述した事後報告書を経営委員会に提出します。
    - **外部関係者（顧客、パートナー、規制当局）とのコミュニケーション計画:**
      - 事前定義済みテンプレート: 様々なシナリオや関係者グループに対応するための、事前定義済みコミュニケーションテンプレートを準備します。
      - 明確な伝達経路と責任者: コミュニケーションチャネルと担当者を明確に定義します。
      - 共有情報: インシデントの性質（セキュリティを損なわない範囲で）、サービスへの予測される影響、および復旧見込み時間を共有します。
      - 外部からの問い合わせ対応プロセス: 外部関係者からの問い合わせに対応するためのプロセスを整備します。
    - **コミュニケーション計画の定期的な見直しと更新:**
      - これらのコミュニケーション計画の有効性を維持するため、定期的なレビューと更新の重要性を強調します。

## ✅ 14. 適合性
    - **法的及び契約上の要求事項の遵守:**
      - 個人情報保護法、著作権法、不正競争防止法等の関連法令、および顧客やサプライヤとの契約に含まれるセキュリティ要求事項を特定し、遵守します。
      - 法令や契約の変更に注意し、対応します。
    - **情報セキュリティ監査:**
      - 本ガイドおよび関連規程の遵守状況や、情報セキュリティ対策の有効性を評価するため、定期的に内部監査または外部監査を実施します。
      - 監査結果に基づき、改善策を実施します。
