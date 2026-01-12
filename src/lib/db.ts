import { supabase, Contact } from './supabase';

export type { Contact };

export async function getContacts(): Promise<Contact[]> {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }

  return data || [];
}

export async function addContact(contact: Omit<Contact, 'id' | 'status' | 'created_at'>): Promise<Contact | null> {
  const { data, error } = await supabase
    .from('contacts')
    .insert({
      name: contact.name,
      phone: contact.phone,
      message: contact.message,
      status: '대기중',
    })
    .select()
    .single();

  if (error) {
    console.error('Error adding contact:', error);
    return null;
  }

  return data;
}

export async function updateContactStatus(id: string, status: Contact['status']): Promise<Contact | null> {
  const { data, error } = await supabase
    .from('contacts')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating contact:', error);
    return null;
  }

  return data;
}

export async function deleteContact(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting contact:', error);
    return false;
  }

  return true;
}
