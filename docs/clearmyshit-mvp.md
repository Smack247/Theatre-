# ClearMySh*t Mobile App Concept

## Elevator Pitch
An on-device AI "screenshot janitor" that auto-detects and categorizes screenshots (receipts, memes, directions, boarding passes, conversations) and surfaces them with natural-language search ("receipt from October," "boarding pass for my trip last month"). Scheduled auto-delete removes disposable content without manual cleanup, keeping camera rolls lean and privacy-focused.

## Target Users & Jobs to Be Done
- **Busy professionals & travelers:** capture tickets, itineraries, receipts; want automatic archiving and expiry.
- **Students & social media users:** save memes, instructions, class notes; need quick recall and clutter control.
- **Privacy-conscious users:** prefer on-device processing and clear consent controls.

## Core Features for MVP
1. **Screenshot ingestion & indexing**
   - Access recent screenshots (last 200–500) via Photos API (iOS first).
   - Lightweight background indexing with battery-aware throttling.
2. **Auto-categorization**
   - Computer vision + OCR to detect receipts, memes, directions/maps, boarding passes, conversations.
   - Confidence thresholds with user-correctable labels to improve future predictions.
3. **Natural-language search**
   - Embedding-backed search over extracted text + visual cues (e.g., "funny meme from last week," "receipt for coffee shop").
4. **Auto-delete schedules**
   - Per-category retention (e.g., memes: 14 days, directions: 7 days, boarding passes: 30 days, receipts: never by default).
   - Preview before delete + undo window.
5. **Manual tools**
   - Batch select, quick actions (share, export to PDF for receipts), favorite/pin to bypass deletion.

## Non-Goals for MVP
- Cloud sync or backup (offer as Pro later).
- Web/desktop clients.
- Custom model training UI (start with fixed model + feedback loop only).

## Monetization Outline
- **Free:** basic categorization for recent screenshots, keyword search, manual delete.
- **Pro (subscription):** unlimited history, advanced semantic search, auto-delete schedules, export options, cross-device sync/backup, custom categories, integrations (e.g., expense apps).

## Technical Approach
- **Platform:** Swift (iOS) MVP; expand to Android post-validation.
- **On-device AI:**
  - OCR via Apple Vision / ML Kit; lightweight CV model for category classification.
  - NLP: local embeddings (e.g., MiniLM variant) for semantic search; fall back to on-device Core ML or small transformer quantized for mobile.
- **Data pipeline:**
  - Background task to ingest new screenshots, run OCR + classification, store metadata in SQLite/Core Data with secure storage permissions.
  - Retention worker evaluates auto-delete rules daily; prompts user before irreversible deletion.
- **Privacy & security:**
  - Default local processing; explicit opt-in for cloud backup if added later.
  - Clear data policy, local-only model weights, no analytics without consent.
- **Performance:**
  - Incremental indexing, debounced when battery low or user active.
  - Cache embeddings and OCR text to avoid reprocessing.

## Edge Cases & Mitigations
- **Misclassification (meme vs receipt):** provide quick relabel + "never delete" pin; log corrections locally to adjust thresholds.
- **Low-light/blurred screenshots:** enhance OCR with binarization/denoising; fall back to text-only search when images are ambiguous.
- **Multilingual text:** ensure OCR/NLP support for top locales; maintain locale-aware tokenization.
- **Large libraries:** process most recent slice first; allow manual "scan older screenshots" action.

## Beta & Feedback Plan
- **Recruitment:** 50 TestFlight users from productivity and travel communities.
- **Instrumentation:** privacy-preserving metrics (model confidence distributions, correction rates) with opt-in.
- **Feedback loops:** in-app thumbs up/down on categorizations, quick survey after delete actions.

## Launch & Differentiation
- Position as "the effortless screenshot janitor" with privacy-first, auto-delete automation, and contextual search depth.
- Marketing: TikTok/Instagram reels showcasing before/after camera roll declutter; ASO targeting "screenshot organizer," "auto delete screenshots."
