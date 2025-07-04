import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="Buscar receta..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
