import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isUser: true }]);
    // Mock response - in a real implementation, this would call an AI service
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thanks for your message! I'm a demo chatbot.", isUser: false }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 flex flex-col p-4 bg-purple-900/30 backdrop-blur-lg border border-purple-500/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-purple-200">Chat Assistant</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>×</Button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.isUser ? 'bg-purple-600 text-white' : 'bg-purple-800/50 text-purple-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ) : (
        <Button
          className="rounded-full bg-purple-600 hover:bg-purple-700"
          onClick={() => setIsOpen(true)}
        >
          Chat
        </Button>
      )}
    </div>
  );
};

export default Chatbot;