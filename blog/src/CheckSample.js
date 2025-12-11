import React, { useEffect, useMemo, useRef, useState } from "react";

export default function CheckAllExample() {
  // 예제용 고정 리스트 (실제에선 API로 대체 가능)
  const ITEMS = [
    { id: "a", label: "항목 A" },
    { id: "b", label: "항목 B" },
    { id: "c", label: "항목 C" },
  ];

  // 선택 상태: { id: boolean }
  const [selected, setSelected] = useState(() =>
    Object.fromEntries(ITEMS.map((it) => [it.id, false]))
  );

  // 마스터 체크박스 (indeterminate 표시용)
  const masterRef = useRef(null);

  const ids = useMemo(() => ITEMS.map((i) => i.id), [ITEMS]);
  const total = ids.length;
  const checkedCount = useMemo(
    () => ids.filter((id) => selected[id]).length,
    [ids, selected]
  );

  const allChecked = total > 0 && checkedCount === total; // 전부 체크됨
  const noneChecked = checkedCount === 0;                 // 하나도 체크 안됨
  const isIndeterminate = !allChecked && !noneChecked;    // 일부만 체크됨

  // indeterminate는 DOM 속성으로만 제어됨
  useEffect(() => {
    if (masterRef.current) {
      masterRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  // 전체선택/해제
  const onToggleAll = (e) => {
    const next = Object.fromEntries(ids.map((id) => [id, e.target.checked]));
    setSelected(next);
  };

  // 개별 토글
  const onToggleOne = (id) => (e) => {
    const { checked } = e.target;
    setSelected((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <div style={{ maxWidth: 420, margin: "20px auto", fontFamily: "sans-serif" }}>
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          ref={masterRef}
          type="checkbox"
          checked={allChecked}
          onChange={onToggleAll}
        />
        <span>전체선택 ({checkedCount}/{total})</span>
      </label>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {ITEMS.map((item) => (
          <li key={item.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
            <input
              type="checkbox"
              checked={!!selected[item.id]}
              onChange={onToggleOne(item.id)}
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
