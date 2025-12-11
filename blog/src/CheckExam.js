import React, { useEffect, useMemo, useRef, useState } from "react";

export default function CheckAllExample() {
  // 예제용 고정 리스트 (실제에선 API로 대체 가능)
  const totalAllItem = [
    { id: "totalAll",    label: "전체" }, 
    { id: "contractAll", label: "계약자 전체" },
    { id: "insureAll",   label: "피보험자 전체" }
  ];

  const contractItem = [
    { id: "a1", label: "항목 A1" },
    { id: "b1", label: "항목 B1" },
    { id: "c1", label: "항목 C1" }
  ];

  const insureItem = [
    { id: "a2", label: "항목 A2" },
    { id: "b2", label: "항목 B2" }
   ];

// 계약 선택 상태: { id: boolean }
  const [contractSelected, setContractSelected] = useState(() =>
    Object.fromEntries(contractItem.map((it) => [it.id, false]))
  );

// 피보험자 선택 상태: { id: boolean }
  const [insureSelected, setInsureSelected] = useState(() =>
    Object.fromEntries(insureItem.map((it) => [it.id, false]))
  );

//계약자 status
  const contractIds = useMemo(() => contractItem.map((i) => i.id), [contractItem]);
  const contractTotal = contractIds.length;
  const contractChkCnt = useMemo(
    () => contractIds.filter((id) => contractSelected[id]).length,
    [contractIds, contractSelected]
  );

  const contractAllChecked = contractTotal > 0 && contractChkCnt === contractTotal; // 전부 체크됨
  const contractNoneChecked = contractChkCnt === 0;                 // 하나도 체크 안됨
  const contractIsIndeterminate = !contractAllChecked && !contractNoneChecked;    // 일부만 체크됨

//피보험자 status
  const insureIds = useMemo(() => insureItem.map((i) => i.id), [insureItem]);
  const insureTotal = insureIds.length;
  const insureChkCnt = useMemo(
    () => insureIds.filter((id) => insureSelected[id]).length,
    [insureIds, insureSelected]
  );

  const insureAllChecked = insureTotal > 0 && insureChkCnt === insureTotal; // 전부 체크됨
  const insureNoneChecked = insureChkCnt === 0;                 // 하나도 체크 안됨
  const insureIndeterminate = !insureAllChecked && !insureNoneChecked;    // 일부만 체크됨

  // 전체선택/해제
  const onContractToggleAll = (e) => {
    const next = Object.fromEntries(contractIds.map((id) => [id, e.target.checked]));
     setContractSelected(next);
  };

  const onInsureToggleAll = (e) => {
    const next = Object.fromEntries(insureIds.map((id) => [id, e.target.checked]));
     setInsureSelected(next);
  };
  const onToggleAll = (e) => {
    onContractToggleAll(e);
    onInsureToggleAll(e);
   }

   // 개별 토글
  const onContractToggleOne = (id) => (e) => {
    const { checked } = e.target;
    setContractSelected((prev) => ({ ...prev, [id]: checked }));
  };

  const onInsureToggleOne = (id) => (e) => {
    const { checked } = e.target;
    setInsureSelected((prev) => ({ ...prev, [id]: checked }));
  };

//전체 
const totalAllIds = useMemo(()=> totalAllItem.map((i) => i.id) , [])
const totalCnt = contractTotal + insureTotal;
const totalChkCnt = contractChkCnt + insureChkCnt;
const totalAllChecked = totalCnt > 0 && totalChkCnt === totalCnt; // 전부 체크됨

  return (
    <div style={{ maxWidth: 420, margin: "20px auto", fontFamily: "sans-serif" }}>
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={totalAllChecked}
          onChange={onToggleAll}
        />
        <span>전체선택 ({totalChkCnt}/{totalCnt})</span>
      </label>
      <br/><br/>
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={contractAllChecked}
          onChange={onContractToggleAll}
        />
        <span>계약자선택 ({contractChkCnt}/{contractTotal})</span>
      </label>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {contractItem.map((item) => (
          <li key={item.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
            <input
              type="checkbox"
              checked={!!contractSelected[item.id]}
              onChange={onContractToggleOne(item.id)}
            />
            <span>{item.label}</span>
          </li>
        ))}
     </ul>
     
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={insureAllChecked}
          onChange={onInsureToggleAll}
        />
        <span>피보험자선택 ({insureChkCnt}/{insureTotal})</span>
      </label>
     <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {insureItem.map((item) => (
            <li key={item.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
            <input
                type="checkbox"
                checked={!!insureSelected[item.id]}
                onChange={onInsureToggleOne(item.id)}
            />
            <span>{item.label}</span>
            </li>
        ))}
      </ul>
    </div>
  );
}