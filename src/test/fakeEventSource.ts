/** The start id of the hall a test talks to, unless it says the hall restarted. */
export const HALL_START_ID = 'hall-start-id-01';

/** jsdom has no EventSource. This one lets a test play the hall's side of the stream. */
export class FakeEventSource {
  static all: FakeEventSource[] = [];
  static get latest(): FakeEventSource {
    return FakeEventSource.all.at(-1)!;
  }

  onmessage: ((message: { data: string }) => void) | null = null;
  onerror: (() => void) | null = null;
  closed = false;
  private readonly named = new Map<string, (message: { data: string }) => void>();

  constructor(readonly url: string) {
    FakeEventSource.all.push(this);
  }

  addEventListener(type: string, listener: (message: { data: string }) => void) {
    this.named.set(type, listener);
  }

  close() {
    this.closed = true;
  }

  /** One SSE message: an object goes as JSON, a string as it is (to test garbage). */
  send(data: unknown) {
    this.onmessage?.({ data: typeof data === 'string' ? data : JSON.stringify(data) });
  }

  /** The named event the hall sends after the replay, with its start id: another one means the hall restarted. */
  replayed(startId = HALL_START_ID) {
    this.named.get('replayed')?.({ data: startId });
  }

  /** Any other named event, its data as the hall writes it (v3.2: `ledger`). */
  emit(type: string, data: string) {
    this.named.get(type)?.({ data });
  }

  fail() {
    this.onerror?.();
  }
}
