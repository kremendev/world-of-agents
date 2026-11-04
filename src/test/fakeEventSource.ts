/** jsdom has no EventSource. This one lets a test play the hall's side of the stream. */
export class FakeEventSource {
  static all: FakeEventSource[] = [];
  static get latest(): FakeEventSource {
    return FakeEventSource.all.at(-1)!;
  }

  onmessage: ((message: { data: string }) => void) | null = null;
  onerror: (() => void) | null = null;
  closed = false;
  private readonly named = new Map<string, () => void>();

  constructor(readonly url: string) {
    FakeEventSource.all.push(this);
  }

  addEventListener(type: string, listener: () => void) {
    this.named.set(type, listener);
  }

  close() {
    this.closed = true;
  }

  /** One SSE message: an object goes as JSON, a string as it is (to test garbage). */
  send(data: unknown) {
    this.onmessage?.({ data: typeof data === 'string' ? data : JSON.stringify(data) });
  }

  /** The named event the hall sends after the replay. */
  replayed() {
    this.named.get('replayed')?.();
  }

  fail() {
    this.onerror?.();
  }
}
