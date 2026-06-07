"use client";

import { useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Loader2,
  Plus,
  RefreshCw,
  Trash2,
  Upload,
} from "lucide-react";

const COUNT_API = "https://project-1csz2.vercel.app/api/stock-count-submit";

type CountLine = {
  id: string;
  itemName: string;
  storageArea: string;
  quantity: string;
  unit: string;
  notes: string;
};

const STORAGE_AREAS = [
  "Walk-in",
  "Freezer",
  "Dry Storage",
  "Bar",
  "Prep",
  "Office",
  "Other",
];

function KitchenPulseLockup() {
  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-center">
        <span
          className="text-[31px] font-black tracking-[-0.055em]"
          style={{
            color: "#F8FAFC",
            textShadow: "0 1px 16px rgba(0,0,0,0.28)",
          }}
        >
          Kitchen
        </span>

        <span
          className="text-[31px] font-black tracking-[-0.055em]"
          style={{
            color: "#22D3EE",
            textShadow: "0 0 18px rgba(34,211,238,0.32)",
          }}
        >
          Pulse
        </span>
      </div>

      <div
        className="mt-0.5 text-center text-[10px] font-bold uppercase tracking-[0.34em]"
        style={{ color: "rgba(226,232,240,0.68)" }}
      >
        stock count
      </div>
    </div>
  );
}

function makeLine(): CountLine {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    itemName: "",
    storageArea: "Walk-in",
    quantity: "",
    unit: "",
    notes: "",
  };
}

export default function CountPage() {
  const cameraInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [counterName, setCounterName] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");
  const [lines, setLines] = useState<CountLine[]>([makeLine()]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validLines = useMemo(() => {
    return lines
      .map((line) => ({
        ...line,
        itemName: line.itemName.trim(),
        storageArea: line.storageArea.trim(),
        quantity: line.quantity.trim(),
        unit: line.unit.trim(),
        notes: line.notes.trim(),
      }))
      .filter((line) => {
        return line.itemName && line.quantity && Number(line.quantity) > 0;
      });
  }, [lines]);

  function updateLine(id: string, patch: Partial<CountLine>) {
    setLines((current) =>
      current.map((line) => (line.id === id ? { ...line, ...patch } : line))
    );
    setStatus("");
    setStatusType("");
    setIsSubmitted(false);
  }

  function addLine() {
    setLines((current) => [...current, makeLine()]);
    setStatus("");
    setStatusType("");
    setIsSubmitted(false);
  }

  function removeLine(id: string) {
    setLines((current) => {
      if (current.length <= 1) return current;
      return current.filter((line) => line.id !== id);
    });
    setStatus("");
    setStatusType("");
    setIsSubmitted(false);
  }

  function openCameraInput() {
    cameraInputRef.current?.click();
  }

  function openFileInput() {
    fileInputRef.current?.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setSelectedFile(null);
      setFileName("");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    setStatus("");
    setStatusType("");
    setIsSubmitted(false);
  }

  function resetForm() {
    setCounterName("");
    setSessionNotes("");
    setLines([makeLine()]);
    setSelectedFile(null);
    setFileName("");
    setStatus("");
    setStatusType("");
    setIsSubmitting(false);
    setIsSubmitted(false);

    if (cameraInputRef.current) cameraInputRef.current.value = "";
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function buildSessionName() {
    const now = new Date();

    const date = now.toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const time = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    return `Stock Count - ${date} ${time}`;
  }

  async function submitCount() {
    if (!counterName.trim()) {
      setStatus("Enter your name before submitting the count.");
      setStatusType("error");
      return;
    }

    if (!validLines.length) {
      setStatus("Add at least one item with a quantity greater than zero.");
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending count to KitchenPulse...");
    setStatusType("success");

    try {
      const formData = new FormData();

      formData.append("sessionName", buildSessionName());
      formData.append("counterName", counterName.trim());
      formData.append("sessionNotes", sessionNotes.trim());
      formData.append("lines", JSON.stringify(validLines));

      if (selectedFile) {
        formData.append("countPhoto", selectedFile);
      }

      const response = await fetch(COUNT_API, {
        method: "POST",
        body: formData,
      });

      const responseText = await response.text();

      let data: { ok?: boolean; error?: string; lineCount?: number } | null =
        null;

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error("Stock count API returned non-JSON response:", responseText);

        setStatus(
          `KitchenPulse received an unexpected response. API status: ${response.status}.`
        );
        setStatusType("error");
        setIsSubmitting(false);
        return;
      }

      if (!response.ok || !data?.ok) {
        console.error("Stock count submit error:", data);

        setStatus(
          data?.error ||
            `KitchenPulse could not submit this stock count. API status: ${response.status}.`
        );
        setStatusType("error");
        setIsSubmitting(false);
        return;
      }

      setStatus("");
      setStatusType("");
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (cameraInputRef.current) cameraInputRef.current.value = "";
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Stock count request failed:", error);

      const message =
        error instanceof Error ? error.message : "Please try again.";

      setStatus(`KitchenPulse could not reach the stock count API. ${message}`);
      setStatusType("error");
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="min-h-[100svh] px-4 py-5"
      style={{
        background:
          "radial-gradient(circle at 18% 10%, rgba(34,211,238,0.18), transparent 28%), radial-gradient(circle at 82% 18%, rgba(99,102,241,0.16), transparent 28%), linear-gradient(135deg, #03101C 0%, #071827 46%, #0B1324 100%)",
      }}
    >
      <div className="mx-auto flex min-h-[calc(100svh-40px)] max-w-md flex-col justify-center">
        <section
          className="rounded-[30px] border p-5 shadow-2xl"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.088), rgba(255,255,255,0.035))",
            borderColor: "rgba(103,232,249,0.16)",
            boxShadow:
              "0 24px 70px rgba(2,8,23,0.48), inset 0 1px 0 rgba(255,255,255,0.07)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="mb-6 flex justify-center">
            <div
              className="inline-flex items-center rounded-[22px] px-4 py-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow:
                  "0 12px 30px rgba(2,8,23,0.20), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <KitchenPulseLockup />
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center">
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "rgba(34,197,94,0.16)",
                  border: "1px solid rgba(34,197,94,0.26)",
                  color: "#22C55E",
                }}
              >
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <h1
                className="mt-5 text-2xl font-bold tracking-[-0.035em]"
                style={{ color: "#F8FAFC" }}
              >
                Count sent
              </h1>

              <p
                className="mx-auto mt-2 max-w-xs text-sm leading-6"
                style={{ color: "rgba(226,232,240,0.74)" }}
              >
                KitchenPulse saved this stock count for review. Counts do not
                affect ordering until approved.
              </p>

              <button
                type="button"
                onClick={resetForm}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold text-white shadow-lg transition active:scale-[0.99]"
                style={{
                  background: "#0F172A",
                  boxShadow: "0 14px 30px rgba(2,8,23,0.32)",
                }}
              >
                <RefreshCw className="h-4 w-4" />
                Submit another count
              </button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h1
                  className="text-2xl font-bold tracking-[-0.035em]"
                  style={{ color: "#F8FAFC" }}
                >
                  Submit stock count
                </h1>

                <p
                  className="mx-auto mt-2 max-w-xs text-sm leading-6"
                  style={{ color: "rgba(226,232,240,0.74)" }}
                >
                  Enter what is on hand. KitchenPulse will stage the count for
                  manager review before using it for ordering.
                </p>
              </div>

              <div className="mt-6">
                <label
                  className="text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: "rgba(226,232,240,0.58)" }}
                >
                  Your name
                </label>

                <input
                  value={counterName}
                  onChange={(event) => {
                    setCounterName(event.target.value);
                    setStatus("");
                    setStatusType("");
                  }}
                  placeholder="Example: Marco"
                  className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                  style={{
                    color: "#F8FAFC",
                    background: "rgba(15,23,42,0.62)",
                    borderColor: "rgba(255,255,255,0.11)",
                  }}
                />
              </div>

              <div className="mt-4 space-y-3">
                {lines.map((line, index) => (
                  <div
                    key={line.id}
                    className="rounded-[24px] border p-4"
                    style={{
                      background: "rgba(15,23,42,0.58)",
                      borderColor: "rgba(255,255,255,0.10)",
                    }}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]"
                        style={{ color: "rgba(226,232,240,0.64)" }}
                      >
                        <ClipboardCheck className="h-4 w-4 text-cyan-200" />
                        Item {index + 1}
                      </div>

                      {lines.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLine(line.id)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full transition active:scale-[0.98]"
                          style={{
                            color: "#FCA5A5",
                            background: "rgba(127,29,29,0.22)",
                            border: "1px solid rgba(248,113,113,0.20)",
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <input
                        value={line.itemName}
                        onChange={(event) =>
                          updateLine(line.id, { itemName: event.target.value })
                        }
                        placeholder="Item name, like chicken breast or brioche buns"
                        className="w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                        style={{
                          color: "#F8FAFC",
                          background: "rgba(2,8,23,0.40)",
                          borderColor: "rgba(255,255,255,0.11)",
                        }}
                      />

                      <select
                        value={line.storageArea}
                        onChange={(event) =>
                          updateLine(line.id, { storageArea: event.target.value })
                        }
                        className="w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                        style={{
                          color: "#F8FAFC",
                          background: "rgba(2,8,23,0.40)",
                          borderColor: "rgba(255,255,255,0.11)",
                        }}
                      >
                        {STORAGE_AREAS.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>

                      <div className="grid grid-cols-[1fr_0.9fr] gap-3">
                        <input
                          value={line.quantity}
                          onChange={(event) =>
                            updateLine(line.id, { quantity: event.target.value })
                          }
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.01"
                          placeholder="Qty"
                          className="w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                          style={{
                            color: "#F8FAFC",
                            background: "rgba(2,8,23,0.40)",
                            borderColor: "rgba(255,255,255,0.11)",
                          }}
                        />

                        <input
                          value={line.unit}
                          onChange={(event) =>
                            updateLine(line.id, { unit: event.target.value })
                          }
                          placeholder="Unit"
                          className="w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                          style={{
                            color: "#F8FAFC",
                            background: "rgba(2,8,23,0.40)",
                            borderColor: "rgba(255,255,255,0.11)",
                          }}
                        />
                      </div>

                      <textarea
                        value={line.notes}
                        onChange={(event) =>
                          updateLine(line.id, { notes: event.target.value })
                        }
                        rows={2}
                        placeholder="Optional note, like opened case, damaged box, count uncertain..."
                        className="w-full resize-none rounded-2xl border px-4 py-3 text-sm outline-none"
                        style={{
                          color: "#F8FAFC",
                          background: "rgba(2,8,23,0.40)",
                          borderColor: "rgba(255,255,255,0.11)",
                        }}
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addLine}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold transition active:scale-[0.99]"
                  style={{
                    color: "#E0F2FE",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.11)",
                  }}
                >
                  <Plus className="h-4 w-4" />
                  Add another item
                </button>
              </div>

              <div
                className="mt-4 rounded-[24px] border p-4 text-center"
                style={{
                  background: "rgba(15,23,42,0.58)",
                  borderColor: selectedFile
                    ? "rgba(34,197,94,0.34)"
                    : "rgba(255,255,255,0.10)",
                }}
              >
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    background: selectedFile
                      ? "rgba(34,197,94,0.16)"
                      : "rgba(34,211,238,0.12)",
                    border: selectedFile
                      ? "1px solid rgba(34,197,94,0.26)"
                      : "1px solid rgba(34,211,238,0.22)",
                    color: selectedFile ? "#22C55E" : "#67E8F9",
                  }}
                >
                  {selectedFile ? (
                    <CheckCircle2 className="h-7 w-7" />
                  ) : (
                    <Camera className="h-7 w-7" />
                  )}
                </div>

                <div
                  className="mt-3 text-sm font-semibold"
                  style={{ color: "#F8FAFC" }}
                >
                  {selectedFile ? "Photo attached" : "Optional photo"}
                </div>

                <div
                  className="mx-auto mt-1 max-w-xs break-words text-xs leading-5"
                  style={{ color: "rgba(226,232,240,0.64)" }}
                >
                  {selectedFile
                    ? fileName
                    : "Attach a shelf photo or paper count sheet if helpful."}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={openCameraInput}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold text-white shadow-lg transition active:scale-[0.99]"
                    style={{
                      background: "linear-gradient(135deg, #0891B2, #0E7490)",
                      boxShadow: "0 14px 30px rgba(8,145,178,0.24)",
                    }}
                  >
                    <Camera className="h-4 w-4" />
                    Take photo
                  </button>

                  <button
                    type="button"
                    onClick={openFileInput}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold transition active:scale-[0.99]"
                    style={{
                      color: "#E0F2FE",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.11)",
                    }}
                  >
                    <Upload className="h-4 w-4" />
                    Choose file
                  </button>
                </div>

                <input
                  ref={cameraInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                />

                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />
              </div>

              <div className="mt-4">
                <label
                  className="text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: "rgba(226,232,240,0.58)" }}
                >
                  Session note
                </label>

                <textarea
                  value={sessionNotes}
                  onChange={(event) => setSessionNotes(event.target.value)}
                  rows={2}
                  placeholder="Example: walk-in count before Sysco order..."
                  className="mt-2 w-full resize-none rounded-2xl border px-4 py-3 text-sm outline-none"
                  style={{
                    color: "#F8FAFC",
                    background: "rgba(15,23,42,0.62)",
                    borderColor: "rgba(255,255,255,0.11)",
                  }}
                />
              </div>

              <button
                type="button"
                onClick={submitCount}
                disabled={isSubmitting}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold text-white shadow-lg transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55"
                style={{
                  background: !isSubmitting
                    ? "linear-gradient(135deg, #22C55E, #16A34A)"
                    : "rgba(148,163,184,0.56)",
                  boxShadow: !isSubmitting
                    ? "0 14px 30px rgba(34,197,94,0.22)"
                    : "none",
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Submit count for review
                  </>
                )}
              </button>

              {status && (
                <div
                  className="mt-4 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm leading-5"
                  style={{
                    color: statusType === "error" ? "#FCA5A5" : "#BBF7D0",
                    background:
                      statusType === "error"
                        ? "rgba(127,29,29,0.22)"
                        : "rgba(20,83,45,0.22)",
                    borderColor:
                      statusType === "error"
                        ? "rgba(248,113,113,0.24)"
                        : "rgba(34,197,94,0.24)",
                  }}
                >
                  {statusType === "error" ? (
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <div>{status}</div>
                </div>
              )}

              <div
                className="mt-4 text-center text-[11px] leading-5"
                style={{ color: "rgba(226,232,240,0.50)" }}
              >
                Counts are staged for review before Order Intelligence uses
                them for reorder pressure.
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
