import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();

  const inputRef = useRef();
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    // 문자열을 리턴(해당 파일의 주소처럼 쓸 수 있음)
    // 사이드 이펙트 발생 (ObjectURL 만들면서 웹 브라우저가 할당한 메모리가 사이드 이펙트)
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
      // 사이드 이펙트를 정리 (ObjectURL 해제)
    };
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      ;{value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
